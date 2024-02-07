

import { writeBlog, publishBlog } from "./blogActions.js";

import readline from  'readline';
import path from 'path';
const pathResolved = path.resolve('myBlog.txt');
const interfaceI = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

interfaceI.question('Enter blog: ', (userBlog) =>{
    writeBlog(pathResolved, userBlog);
    const publishBlogContent = publishBlog(pathResolved);
    console.log(publishBlogContent);
})