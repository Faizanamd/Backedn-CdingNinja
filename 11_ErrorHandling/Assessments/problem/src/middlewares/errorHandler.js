import { logger } from "./logger.middleware.js";

export class customErrorHandler extends Error {
  constructor(statusCode, message, url) {
    super(message);
    this.statusCode = statusCode;
    this.url = url;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  const url = req.originalUrl; // Get the URL from the request
  let statusCode = 500;
  let errorMessage = "Oops! Something went wrong... Please try again later!";
  
  if (err instanceof customErrorHandler) {
    statusCode = err.statusCode;
    errorMessage = err.message;
  }

  // Log the error using Winston logger including the 'url' property
  logger.error({
    level: "error",
    message: errorMessage,
    url: url // Include the 'url' property in the log data
  });

  res.status(statusCode).json({ error: errorMessage });
};
