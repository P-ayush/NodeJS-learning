const dbConfig = require("../config/config.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
    dialect: dbConfig.db_dialect,
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./models/user.js")(sequelize, DataTypes);
db.sequelize.sync({ force: false })
    .then(() => {
        console.log("sync done");
    });

module.exports = db;