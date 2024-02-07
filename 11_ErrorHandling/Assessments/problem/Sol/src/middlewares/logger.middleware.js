import winston from "winston";

const logger = winston.createLogger({
  level: "error",
  format: winston.format.combine(
    winston.format.timestamp({
      format: "ddd MMM DD YYYY HH:mm:ss GMTZZ"
    }),
    winston.format.printf(info => {
      return JSON.stringify({
        level: info.level,
        timestamp: info.timestamp,
        "request URL": info.url,
        "error message": info.message
      });
    })
  ),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" })
  ]
});

export { logger };
