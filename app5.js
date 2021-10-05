const express = require("express");
const http = require("http");
const fs = require("fs");

const server =  http.createServer((req, res) => {

    if(req.url === "page1"){
        fs.readFile('pageOne.html', function(err, data){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        })
        
    }
    else if(req.url === "page2"){//defininng another url
        fs.readFile('pageTwo.html', function(err, data){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        })
        
    }
    else if(req.url === "page3"){//defininng another url
        fs.readFile('error.html', function(err, data){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        })
        
    }
    
}).listen(3000);
console.log("listening to port 3000");