import express from "express";
import createUser from "../controller/user/createUser";
import login from "../controller/user/login";

export const userRouter = express.Router();

userRouter.post("/signup", createUser)
userRouter.post("/login", login)