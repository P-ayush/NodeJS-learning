const http = require("http");
const express = require("express");
const app = express();
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("event_site", "root", "", {
    dialect: "mysql",
});
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: 'user',
}

);
app.get("/", (req, res) => {
     User.findAll()
    .then((user) => {
        return res.send ( user.map(user => user.toJSON()));
    })
    .catch((error) => {
        console.error('Error retrieving users:', error);
    });
  
});
http.createServer(app).listen(2000, () => {
    console.log("server has started");
});


