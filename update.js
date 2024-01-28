const http = require("http");
const express = require("express");
const mysql = require("mysql")

const app = express();
app.use(express.urlencoded({extended : false }));
app.use(express.json());

app.put("/:id",(req,res)=>{
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
        const user_id = req.params.id;
       const query = `UPDATE user SET email = "${email}" WHERE user_id =${user_id}`;
         con.query(query, function (error, result) {
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