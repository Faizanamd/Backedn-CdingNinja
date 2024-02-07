


// import http from 'http'; // ES6 method


const http = require('http');

const server = http.createServer((req, res) =>{
    res.write("Welcome to NodeJS with nodemon\n");
    if(req.url === '/user'){
        res.end("This is user url respondeds");
    }
    else if(req.url === '/product'){
        res.end("This is product url responded");
    }
    else
        res.end("Welcome to NodeJS begineer server");


});

server.listen(3100, () =>{
    console.log("Server is listening on port 3100");
});



