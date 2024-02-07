import jwt from "jsonwebtoken";
import { addUser, confirmLogin } from "../model/user.model.js";

export const registerUser = (req, res, next) => {
  const userData = req.body;
  if (userData) {
    let user = addUser(userData);
    res.status(201).send({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

export const loginUser = (req, res) => {
  let status = confirmLogin(req.body);
  if (status) {
    // Create a JWT token
    const token = jwt.sign(status, "VFT9nLTTpq2BCBklnCL7I82z2DxUoprW", { expiresIn: "1h" });

    // Store the token in a cookie named "jwtToken"
    res.cookie("jwtToken", token, {
      httpOnly: true,
    });

    res.status(200).json({ status: "success", msg: "login successful", token });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};
