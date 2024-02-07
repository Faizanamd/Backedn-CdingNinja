// Please don't change the pre-written code
// Import the necessary modules here
import { getAllUsers } from "../features/user/model/user.model.js";
console.log(getAllUsers());
const basicAuthMiddleware = (req, res, next) => {
  // Write your code here

  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({
      "success": false,
      "message": "no authorization details found"
    });
  }

  const base64Credentails = authHeader.replace('Basic', '');

  const decodedCreds = Buffer.from(base64Credentails, 'base64').toString('utf8');
  const creds = decodedCreds.split(':');
  console.log(creds[0] +" "+ creds[1]);
  const user = getAllUsers().find((u) => u.email == creds[0] && u.password == creds[1]);
  console.log(user);
  if (user) {
    next();
  } else {
    return res.status(401).json({
      "success": false,
      "message": "no authorization details found"
    });
  }

};

export default basicAuthMiddleware;
