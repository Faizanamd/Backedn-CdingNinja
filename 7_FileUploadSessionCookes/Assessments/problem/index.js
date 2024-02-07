// index.js
import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session"; // Import express-session
import { handleGame, handleLogin, handlePost, handleSignUp, renderLogin, renderSignUp } from "./user.controller.js";
import { auth } from "./middleware/auth.js";
import { generateRandomNumber } from "./middleware/generateRandomNumber.js"; // Import the generateRandomNumber middleware

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Implement express-session middleware
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", auth, generateRandomNumber, handleGame);
app.post("/guess", handlePost);
app.get("/login", renderLogin);
app.get("/signup", renderSignUp);
app.post("/login", handleLogin);
app.post("/signup", handleSignUp);

export default app;
