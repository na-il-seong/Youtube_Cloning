import "core-js";
import express from "express";
import { resolve } from "dns";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from MY ASS");

const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};

const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/", betweenHome, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
