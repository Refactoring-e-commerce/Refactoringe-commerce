import express from "express";
import * as UserController from "../controllers/user_controller";
import passport from "passport";
const userRouter = express.Router();
userRouter.get(
  "/Google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);
userRouter.get("/GoogleRedirect", UserController.signInGoogle);
userRouter.post("/signin", UserController.SignIn);
userRouter.post("/signup", UserController.SignUp);
userRouter.get("/logout", UserController.logout);
userRouter.post("/forgetPassword", UserController.forgetPassword);
userRouter.post("/verifyCode", UserController.verifyingCode);
userRouter.post("/updatePassword", UserController.updatePassword);
export default userRouter;
