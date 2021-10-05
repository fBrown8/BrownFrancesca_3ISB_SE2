//FS MODULE
const fs = require("fs");

//ASYNCHRONOUSLY READ INFO.TXT
fs.readFile('info.txt', 'utf8', (err, data) => {
    if(!err){
        console.log(data);
    }else{
        console.log('Data not found.')
    }
})