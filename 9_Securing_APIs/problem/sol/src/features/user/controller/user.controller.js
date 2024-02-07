// Please don't change the pre-written code
// Import the necessary modules here
import {addUser, confirmLogin} from '../model/user.model.js';
export const registerUser = (req, res, next) => {
  const { name, email, password } = req.body;
  const data = { name, email, password };
  const newUser = addUser(data); // Get the newly created user object

  res.status(201).json({
    status: "success",
    user: newUser // Send the newUser object in the response
  });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;
  const obj = { email, password };
  const loginStatus = confirmLogin(obj);

  if (loginStatus) {
    res.status(200).json({ status: "success", msg: "login successful" });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};