
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method == 'POST') {
        console.log(req.body);
        let body = "";
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            res.end("Data is received!");
        })
        console.log("HII");
    }else{
        console.log("This else condition which tell data is not post");
        res.end("Welcome to node js http request!");
    }
});

server.listen(3100);
console.log("Server is listening");