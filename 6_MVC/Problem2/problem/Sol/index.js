// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);
app.use(express.urlencoded({extended:true}));

// Write your code here
import { renderBlogs, renderBlogForm, addBlog } from "./src/controllers/blog.controller.js";
app.get('/', renderBlogs);
app.get('/createblog', renderBlogForm);
app.post('/addBlog', addBlog);


export default app;
