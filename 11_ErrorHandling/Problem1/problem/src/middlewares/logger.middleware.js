import fs from 'fs';
const fsPromise = fs.promises;

async function log(logData) {
  const formattedDate = new Date().toString();
  const logEntry = `{"${formattedDate}\n\nreq URL: ${logData.url}\nreqBody: ${JSON.stringify(logData.body)}\n","service":"user-service"}\n`;

  try {
    await fsPromise.appendFile('log.txt', logEntry);
  } catch (err) {
    console.log(err);
  }
}

export const loggerMiddleware = async (req, res, next) => {
  const logData = {
    url: req.url,
    body: req.body
  };

  await log(logData);
  next();
};

export default loggerMiddleware;
