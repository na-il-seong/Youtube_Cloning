import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import "core-js";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import passport from "passport";
import session from "express-session";

import { localsMiddleware } from "./middlewares";

import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

import routes from "./routes";
import "./passport";

const app = express();

dotenv.config();

app.use(helmet()); // to security
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(morgan("dev"));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.users, userRouter);
app.use(routes.home, globalRouter);
app.use(routes.videos, videoRouter);

export default app;
