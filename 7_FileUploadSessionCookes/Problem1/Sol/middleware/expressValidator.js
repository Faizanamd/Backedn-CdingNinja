// Please don't change the pre-written code
// Import the necessary modules here
import { body, validationResult } from "express-validator";


export const formValidation = async (req, res, next) => {
  // Write your code here
  const rules = [
    body('name')
      .notEmpty()
      .withMessage('Name is required'),
    body('email')
      .isEmail()
      .withMessage('Enter a valid email'),
    body('imageUrl').custom((value, { req }) => {
      if (!req.file) {
        throw new Error("Profile image is required");
      }
      return true;
    })
  ];
  await Promise.all(
    rules.map((rule) => rule.run(req))
  );
  var validationErrors = validationResult(req);
  console.log(validationErrors);
  // 4. if errros, return the error message
  if (!validationErrors.isEmpty()) {
    return res.render('upload-form');
  }
  
  next();
};
