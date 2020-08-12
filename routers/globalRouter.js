import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
  githubLogin,
  postGithubLogin,
  getMe,
  facebookLogin,
  postFacebookLogin,
} from "../controllers/userController";
import { OnlyPublic, OnlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, OnlyPublic, getJoin);
globalRouter.post(routes.join, OnlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, OnlyPublic, getLogin);
globalRouter.post(routes.login, OnlyPublic, postLogin);

globalRouter.get(routes.me, OnlyPrivate, getMe);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, OnlyPrivate, logout);

globalRouter.get(routes.github, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

globalRouter.get(routes.facebook, facebookLogin);

globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  postFacebookLogin
);

export default globalRouter;
