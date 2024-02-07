

const express = require('express');

const server = express();
/*
server.get('/',
// First  middleware
 (req, res, next) =>{
        res.send("Welcome to Express Server This is first middleware");
        // console.log("This is next console using nextFunction");
        next();
    },
    // second middleware
    (req, res) =>{
        res.send("Hello world this is from second middleware");
    }
);
*/

function firstMiddleware(req, res, next) {
    console.log("THis is first middle ware")
    next();
}


function secondMiddleWare(req, res, next) {
    console.log("THis is second middleware");
    next();
}

function gloabalMiddleWare(req, res, next) {
    console.log("this is a application global middleware");
    next();
}

server.use(gloabalMiddleWare);
// Get request
server.get("/", [firstMiddleware, secondMiddleWare], (req, res) => {

    res.end("Hello world! This is express server");
})


//post request
server.post('/', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.status(201).end("post request");

});

//update request
server.put("/", (req, res) => {
    res.end("Put request");
});

// detete request
server.delete("/", (req, res) => {
    res.end("Delete request");
})

server.listen(3200, () => {
    console.log("Server is listening on 3100");
});