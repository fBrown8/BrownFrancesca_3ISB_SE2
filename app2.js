//FS MODULE
const fs = require("fs");

//CREATE SUBDIRECTORY ASYNCHRONOUSLY
const dir = './data';
fs.mkdirSync(dir);

// CREATING A READABLE & WRITABLE STREAM
let readableStream = fs.createReadStream('info.txt');
let writableStream = fs.createWriteStream('./data/info2.txt');

//STREAM PIPING
readableStream.pipe(writableStream);

console.log("Successfully copied file.");