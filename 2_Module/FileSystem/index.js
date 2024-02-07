


console.log("File start reading here");

const fs = require('fs');

const buffer = fs.readFileSync('file.txt');
console.log(buffer.toString());

const buffer2 = fs.readFileSync('file.txt', {encoding:'utf8'});
console.log(buffer2);


console.log("File reading ends here");