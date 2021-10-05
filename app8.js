const express = require('express');
const mysql2 = require('mysql2');

const PORT = process.env.PORT || 3000;
const app = express();



const con = mysql2.createConnection({
    host: "localhost",
    port: 3306,
    user: "Cheska Brown",
    password: "sese2!",
    database: "GlobalCovidDb"
   
  })


con.connect((err) =>{
    if(!err){
        console.log("connected to MySQL server at port 3306...");
    }else{
        console.log("error not connected to MYSQL Server")
    }
});

app.get("/first", (req, res) => {
    let sql = "CREATE DATABASE GlobalCovidDb";
    con.query(sql, (err,result) => {
        if(!err){
            res.send("Successfully created database");
        }else{
            res.send("failed to create GlobalCovidDB database....")
        }
    });
});


app.get("/second", (req, res) => {
    let sql = "CREATE TABLE stat(CountryId int AUTO_INCREMENT, TotalCases int, TotalTests int, TotalDeaths int, PRIMARY KEY(CountryId))";
    con.query(sql, (err,result) => {
        if(!err){
            res.send(result);
        }else{
            res.send("failed to create stat table....")
        }
    });
});

app.get("/third", (req, res) => {
    let newRow = {CountryId: 18, TotalCases: 92834728, TotalTests: 123211, TotalDeaths: 21231210};
    let sql = "INSERT INTO stat SET ?";
    con.query(sql, newRow, (err,result) => {
        if(!err){
            res.send(result);
        }else{
            res.send("failed to insert into stat table....")
        }
    });
});

app.get("/fourth", (req, res) => {
    let sql = "SELECT * FROM stat";
    con.query(sql,(err,result) => {
        if(!err){
            res.send(result);
        }else{
            res.send("failed to read stat table....")
        }
    });
});




app.listen(PORT, () => {
    console.log("Listening to PORT " + PORT + "....");
   });