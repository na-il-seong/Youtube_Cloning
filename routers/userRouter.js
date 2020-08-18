import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  postEditProfile,
  postChangePassword,
  getChangePassword,
} from "../controllers/userController";
import { OnlyPrivate, uploadeAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.changePassword, OnlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, OnlyPrivate, postChangePassword);

userRouter.get(routes.editProfile, OnlyPrivate, getEditProfile);
userRouter.post(
  routes.editProfile,
  OnlyPrivate,
  uploadeAvatar,
  postEditProfile
);

userRouter.get(routes.userDetail(), OnlyPrivate, userDetail);

export default userRouter;
