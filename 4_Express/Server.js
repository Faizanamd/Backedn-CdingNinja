

const http = require('http');

const server = http.createServer((req, res) =>{
    res.end("Respons is send successfully");
});

server.listen(3100);
console.log("Server is listening on port 3100");

