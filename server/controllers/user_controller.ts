import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

import { Signup, SignUpuser } from "../types";

const prisma = new PrismaClient();

const findUserByRole = async (role: string, email: string) => {
  switch (role) {
    case "user":
      return await prisma.user.findUnique({
        where: { email },
      });
    case "brand":
      return await prisma.brand.findUnique({
        where: { email },
      });
    case "creator":
      return await prisma.creator.findUnique({
        where: { email },
      });
    default:
      return null;
  }
};

const CreateByRole = async (
  role: string,
  { email, fullName, birthDate, password }: SignUpuser
) => {
  switch (role) {
    case "user":
      const userData: any = {
        email,
        fullName,
        birthDate,
        password: await bcrypt.hash(password, 10),
      };
      return await prisma.user.create({
        data: userData,
      });
    case "brand":
      const brandData: any = {
        email,
        fullName,
        password: await bcrypt.hash(password, 10),
      };
      return await prisma.brand.create({
        data: brandData,
      });

    case "creator":
      const creatorData: any = {
        email,
        fullName,
        password: await bcrypt.hash(password, 10),
      };
      return await prisma.creator.create({
        data: creatorData ,
      });
  }
};

export const SignIn = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  try {
    const toLogin = await findUserByRole(role, email);

    if (!toLogin) {
      res.status(400).send({ error: "Invalid email" });
    } else {
      const validPassword = await bcrypt.compare(password, toLogin.password);

      if (!validPassword) {
        res.status(400).send({ error: "Invalid password" });
      } else {
        console.log(toLogin);
        const token = jwt.sign(
          { userId: toLogin.id, fullName: toLogin.fullName },
          "keyyyyy",
          { expiresIn: "1h" }
        );

        res.cookie("access_token", token, {
          httpOnly: true,
          secure: false,
          maxAge: 3600000,
        });

        res.status(200).send({ token, user: toLogin });
      }
    }
  } catch (err: any) {
    res.status(400).send({ error: err.message });
  }
};

export const SignUp = async (req: Request, res: Response) => {
  const { role, email } = req.body;
  try {
    const existingUser = await findUserByRole(role, email);

    if (existingUser) {
      res.status(230).send({ error: "User already exists" });
    } else {
      const newUser = CreateByRole(role, req.body);

      if (!newUser) {
        return res.status(400).send({ error: `Failed to create user ${role}` });
      }

      res.status(201).send(`Welcome`);
    }
  } catch (err: any) {
    res.status(400).send({ error: err.message });
  }
};



export const logout = async (req: Request, res: Response) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("user has been loged out");
};
