import express from "express";
import empRoutes from "./routes/employee.route.js";
const app = express();
import cors from 'cors';
// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here
var corsOptions = {
    origin: "http://localhost:5500"
  }
  app.use(cors(corsOptions));
app.use("/api/v1/emp", empRoutes);

export default app;
