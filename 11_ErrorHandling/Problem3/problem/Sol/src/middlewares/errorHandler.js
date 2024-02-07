export class customErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  let statusCode = 500;
  let errorMessage = "Oops! Something went wrong... Please try again later!";

  if (err instanceof customErrorHandler) {
    statusCode = err.statusCode;
    errorMessage = err.message;
  }

  res.status(statusCode).json({ error: errorMessage });
};
