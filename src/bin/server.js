const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const router = require("../api/user/router.js");
app.use("/api/users", router);


app.get("/", (req, res) => {
    return res.send("hello");
})

app.listen(8000,()=>{
    console.log('server has started on port 8000');
});