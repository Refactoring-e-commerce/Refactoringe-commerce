import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import joi from "joi";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import passport from "passport";
import { Signup, SignUpuser } from "../types";
//
const prisma = new PrismaClient();
const SchemaValidation = joi.object({
  fullName: joi.string().min(3).max(25).required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});
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
  { email, fullName, birthDate, password }: any
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
      res.status(401).send({ error: "Invalid email or password" });
    } else {
      const validPassword = await bcrypt.compare(password, toLogin.password);
      if (!validPassword) {
        return res.status(401).send({ error: "Invalid email or password" });
      } else {
        const token = jwt.sign(
          {
            role: role,
            userId: toLogin.id,
            fullName: toLogin.fullName,
          },
          "ahmed",
          { expiresIn: "1h" }
        );
        res.status(200).send({ token: token });
      }
    }
  } catch (err: any) {
    res.status(500).send({ error: err.message });
  }
};

export const signInGoogle = passport.authenticate("google", {
  successRedirect: "http://localhost:3000",
  failureRedirect: "http://localhost:3000/auth/sign-in",
});

export const SignUp = async (req: Request, res: Response) => {
  const { role, email, password, fullName } = req.body;
  console.log(req.body);

  const validation = SchemaValidation.validate({
    fullName,
    email,
    password,
  });

  try {
    if (validation.error) {
      res.status(400).send(validation.error.details[0].message);
    } else {
      const existingUser = await findUserByRole(role, email);

      if (existingUser) {
        res.status(409).send({ error: "User already exists" });
      } else {
        const newUser = await CreateByRole(role, req.body);
        res.status(201).json(`Welcome`);
      }
    }
  } catch (err: any) {
    res.status(500).send({ error: err.message });
  }
};

export const logout = async (req: Request, res: Response) => {
  req.cookies.destroy();
  res.status(200).send("user has been logged out");
};

const verificationCodes: Record<string, number> = {};

export const forgetPassword = async (req: Request, res: Response) => {
  try {
    const { role, email } = req.body;
    const existingUser = await findUserByRole(role, email);

    if (existingUser) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const verificationCode = Math.floor(Math.random() * 90000);

      verificationCodes[email] = verificationCode;

      const info = await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "Hello ✔ this is your code verification",
        text: "Reset password",
        html: `
      <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
        <h2 style="color: #3498db;">Code Verification</h2>
        <p style="font-size: 18px; color: #555;">Use the following code to reset your password:</p>
        <div style="background-color: #3498db; color: #fff; font-size: 24px; padding: 10px; margin-top: 10px;">
          ${verificationCode}
        </div>
        <p style="font-size: 16px; color: #555; margin-top: 20px;">This code will expire after a certain period.</p>
        <p style="font-size: 16px; color: #555;">If you did not request a password reset, please ignore this email.</p>
      </div>
    `,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } else {
      res.status(400).json({ message: "this Email dosn't exist " });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const verifyingCode = async (req: Request, res: Response) => {
  try {
    const { email, fullCode } = req.body;

<<<<<<< HEAD
    const storedCode = verificationCodes[email];

    if (storedCode && parseInt(fullCode) === storedCode) {
      res.status(200).json({ message: "Verification successful" });
    } else {
      res.status(400).json({ message: "Verification failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updatePassword = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;
    console.log(req.body);

    await updateByRole(role, email, password);

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateByRole = async (role: string, email: string, password: string) => {
  try {
    switch (role) {
      case "user":
        return await prisma.user.update({
          where: {
            email: email,
          },
          data: {
            password: await bcrypt.hash(password, 10),
          },
        });
      case "brand":
        return await prisma.brand.update({
          where: {
            email: email,
          },
          data: {
            password: await bcrypt.hash(password, 10),
          },
        });
      case "creator":
        return await prisma.creator.update({
          where: {
            email: email,
          },
          data: {
            password: await bcrypt.hash(password, 10),
          },
        });
      default:
        throw new Error(`Invalid role: ${role}`);
    }
  } catch (error) {
    console.error("Error during user creation:", error);
    throw new Error("Failed to create user");
  }
=======
export const logout = async (req: Request, res: Response) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("user has been loged out");
>>>>>>> 3757fb1462996c995840855653502c925e4858bf
};
