const http = require("http");
const express=require("express");
const mysql =require("mysql");

app = express();
app.use(express.json());

app.delete("/deleteUser:id",(req,res)=>{
    const con=mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "event_site"
    })
    con.connect((error) => {
        if (error) throw error;
        const user_id = req.params.id;
        const query = `delete from user where user_id =${user_id}`;
        con.query(query, function (error, result) {
            if (error) throw error;
            console.log(result);
        });
        res.send("delete request successfull");
    });
});
http.createServer(app).listen(2000,()=>{
    console.log("server has started");
});