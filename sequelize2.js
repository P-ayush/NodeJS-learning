const http = require("http");
const express = require("express");
const app = express();
app.use(express.json());
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("event_site", "root", "", {
    dialect: "mysql",
});
const User = require("./user.js");
sequelize.sync()
    .then(() => {
        console.log("table synced");
    }).catch((err) => {
        console.log(err);
    });

app.post("/createUser", (req, res) => {
    User.create({
        user_id: req.body.user_id,
        name: req.body.name,
        password: req.body.password,
        phone_number: req.body.phone_number,
    }).then((user) => {
        res.send("user created successfully");
        console.log('User created successfully:', user.toJSON());
    })
        .catch((error) => {
            console.error('Error creating user:', error);
        });
});
http.createServer(app).listen(2000, () => {
    console.log("server has started");
});