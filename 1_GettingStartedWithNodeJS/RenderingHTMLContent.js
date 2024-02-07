
const http = require("http");
const fs = require("fs");


const server = http.createServer((req , res) =>{
    const htmlContent = fs.readFileSync('index.html').toString();
    res.end(htmlContent);
});
server.listen(3100 ,() =>{
    
    console.log("Server is listened on port3100");
    
});
