const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "event_site"
});

con.connect((error) => {
    if (error) throw error;
    con.query("select * from users", function (error, result, fields) {
        if (error) throw error;
        console.log(result);
    });
});