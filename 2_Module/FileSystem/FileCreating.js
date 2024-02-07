


const { captureRejectionSymbol } = require("events");
const fs = require("fs");

try{
    // fs.writeFileSync("FileFSCreated.txt", "");
    fs.writeFileSync("FileFSCreated.txt", "Name: John, Age: 40, Position Manager");
}catch(err){
    console.log(err);
}


fs.appendFileSync("FileFSCreated.txt", "\nName: David Doe, Age: 35, Position: COO");

// Deleting a file
try{
fs.unlinkSync("FileFSCreated.txt");
}catch(err){

    console.log(err);
}