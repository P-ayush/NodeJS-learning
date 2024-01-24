const http = require("http");
const express = require("express");


const app = express();
app.use(express.urlencoded({extended : false }));
app.use(express.json());

app.get("/",(req,res)=>{
    return res.send("hello");
})
app.post("/users",(req,res)=>{
    console.log(req.body);
    res.send("post request created");
  
})
http.createServer(app).listen(2000,()=>{
    console.log("server has started");
});
