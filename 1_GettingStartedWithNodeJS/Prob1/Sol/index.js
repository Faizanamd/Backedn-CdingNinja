// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
const http = require('http');
const server = http.createServer((req, res) =>{
    res.end("sever is created");
});

server.listen(8080, () =>{
    console.log("Response received at port 8080.");
});
module.exports = server;
