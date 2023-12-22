import express from "express";
import * as UserController from "../controllers/user_controller";

const userRouter = express.Router();

userRouter.post("/signin", UserController.SignIn);
userRouter.post("/signup", UserController.SignUp);
userRouter.get("/logout", UserController.logout);

export default userRouter;
