//IMPORT FS AND HTTP MODULES
const fs = require('fs');
const http = require('http');

//READ TXT FILE
fs.readFile('./data/info2.txt', 'utf8', (err, data) => {
    if(!err){
        console.log(data);
    }else{
        console.log('Data not found.')
    }
    
//DISPLAY CONTENT TO BROWSER
    http.createServer(function(req, res){
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
    }).listen(3000);
});
console.log('Listening to port 3000.')