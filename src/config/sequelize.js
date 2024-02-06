const {Sequelize,DataTypes}=require("sequelize");

const sequelize=new Sequelize("event_site","root","",{
    dialect:"mysql",
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });