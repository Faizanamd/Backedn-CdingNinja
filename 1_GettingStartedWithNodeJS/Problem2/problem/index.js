// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here

const http = require("http");
const fs = require('fs');


const server = http.createServer((req ,res) =>{
    const htmlContent  = fs.readFileSync('index.html').toString();
    res.end(htmlContent);
});

server.listen(8080, () =>{
    console.log("The index.html page rendering on port8080");
});





module.exports = server;
