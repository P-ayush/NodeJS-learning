const http = require("http");
const express = require("express");
const mysql = require("mysql")

const app = express();
app.use(express.urlencoded({extended : false }));
app.use(express.json());

app.get("/",(req,res)=>{
    return res.send("hello");
})
app.post("/users",(req,res)=>{
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "event_site"
    });
    
    con.connect((error) => {
        if (error) throw error;
        const email=req.body.email;
        const name=req.body.name;
        const phone_number=req.body.phone_number;
        const password=req.body.password;
    
         con.query(`insert into user (name,email,password,phone_number) values ("${name}","${email}",${password},${phone_number})`, function (error, result) {
             if (error) throw error;
             console.log(result);
         });
   
 

    console.log(req.body);
    res.send("post request created");
});
});
http.createServer(app).listen(2000,()=>{
    console.log("server has started");
});
