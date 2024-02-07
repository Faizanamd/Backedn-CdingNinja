const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/first') {
        res.end("THis fisrt response page");
    } else {
        res.end("Hello from nodeJs");
    }
});
server.listen(3200, (req, res) => {
    console.log("server is listeneing at 3200");
})