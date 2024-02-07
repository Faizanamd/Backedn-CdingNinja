import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  const token = req.cookies.jwtToken;

  if (!token) {
    // If there is no token, return a 401 response with an error message
    return res.status(401).json({
      "success":false,
      "msg": {
          "name": "jsonwebtoken erro",
          'error': "jwt must be provided"

      }
  });
  }

  try {
    // Verify the token using your secret key
    const decoded = jwt.verify(token, "yourSecretKey");

    // Store the decoded user information in the request object for future use
    req.user = decoded;
    next(); // Proceed to the next middleware or route
  } catch (error) {
    // If the token is invalid, return a 401 response with an error message
    return res.status(401).json({
      "success":false,
      "msg": {
          "name": "jsonwebtoken erro",
          'error': "jwt must be provided"

      }
  });
  }
};

export default jwtAuth;
