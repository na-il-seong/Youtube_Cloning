import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword,
} from "../controllers/userController";
import { OnlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.changePassword, OnlyPrivate, changePassword);
userRouter.get(routes.editProfile, OnlyPrivate, editProfile);
userRouter.get(routes.userDetail(), OnlyPrivate, userDetail);

export default userRouter;
