// Please don't change the pre-written code
// Import the necessary modules here

import { updateUsers, users } from "./user.model.js";

export const renderUpdateForm = (req, res) => {
  res.render("update-form", { user: users[0] });
};

// export const updateUser = (req, res) => {
//   console.log(req.body);
//   const { name, email, image } = req.body;

//   const updatedUser = {
//     name,
//     email,
//     image,
//   };

//   updateUsers(updatedUser);

//   res.render("update-form", { user: updatedUser });
// };
export const updateUser = (req, res) =>{
  console.log(req.body);
  updateUsers(req.body);
  res.render("update-form", {user: req.body});
}