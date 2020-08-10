import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
} from "../controllers/userController";
import { OnlyPublic, OnlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, OnlyPublic, getJoin);
globalRouter.post(routes.join, OnlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, OnlyPublic, getLogin);
globalRouter.post(routes.login, OnlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, OnlyPrivate, logout);

export default globalRouter;
