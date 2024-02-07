// Please don't change the pre-writte

const express = require("express");
const server = express();
const path = require('path');


// Define the renderStatic function to serve static files


const renderStatic = (serverObj, staticDirectory) => {
  serverObj.use(express.static(staticDirectory));
};

// Call renderStatic before defining routes
server.get("/", (req, res) => {
  res.send("get method called!");
});
const staticDirectory = path.join(__dirname, "public");
renderStatic(server, staticDirectory);

module.exports = { renderStatic, server };
