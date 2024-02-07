// // import express from "express";
// // const app = express();
// // app.get("/", (req, res, next) => {

// //     next();

// // });

// // app.get("/", (req, res) => {
// //     res.send("get method called");

// // });

// // app.post("/", (req, res) => {
// //     res.send("post method called");

// // });

// // app.put("/", (req, res) => {
// //     res.send("update method called");

// // });

// // app.delete("/", (req, res) => {
// //     res.send("delete method called");

// // });

// // app.listen(3000, () => {

// //     console.log("server is listening on port 3000");

// // });


// // // 2222



// // const express = require("express"); const server = express(); server.get("/", (req, res) => {

// //     res.send("get method called!");

// // });

// // server.post("/", (req, res) => {
// //     res.send("post method called!");

// // });

// // server.update("/", (req, res) => {

// //     res.send("update method called!");

// // });

// // server.delete("/", (req, res) => {
// //     res.send("delete method called!");

// // });

// // server.listen(3000, () => {

// //     console.log("server is listening at 3000");

// // });


// const express = require("express"); const app = express();

// app.get("/", (req, res) => {
//     res.set('Content-Type', 'text/plain')
//     res.send("get method called!");

// });

// app.post("/", (req, res) => {
//     res.send("post method called!");

// });

// app.update("/", (req, res) => {
//     res.send("update method called!");

// });

// app.delete("/", (req, res) => {
//     res.send("delete method called!");

// });

// app.listen(3000, () => {

//     console.log("server is listening at 3000");
// });


// A)

// const express = require('express');
// const app = express();
// const path = require('path');
// const publicPath = path.join(dirname, 'public');
// app.use(express.static(publicPath));

// B

// const express = require('express');
// const app = express();
// const path = require('path');
// app.use(express.static(__dirname, 'public'));


// C
// const express = require('express');
//  const app = express();

// app.get('/', function (req, res) {
//     res.send(__dirname + '/public");

// })


// // D
// const express = require('express');
// const app = express(); 
// const path = require('path');

// const publicPath = path.join(dirname, 'public');
// app.use(' / public', express.static (publicPath));