
const fs = require('fs');

const path = require('path');
const filePath = path.join('src', 'Home', 'File.txt');
const filePathResolved = path.resolve('src', 'Home', 'File.txt');
console.log(filePath);
console.log(filePathResolved)


fs.readFile(filePath, (err, data) =>{
    if(err)
        console.log(err);
    else    
        console.log(data.toString());
})