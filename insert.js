const mysql = require("mysql");
const http = require("http");
const bodyParser = require("body-parser");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "event_site"
});

con.connect((error) => {
    if (error) throw error;
    
    const bodyParserMiddleware = bodyParser.json();
    http.createServer((req, res) =>{
    if (req.url === "/" && req.method === "POST") {
        
        //     console.log(req.body);
        //     res.end(req.body);
        bodyParserMiddleware(req, res, () => {
          const email=req.body.email;
           const name=req.body.name;
           const phone_number=req.body.phone_number;
           const password=req.body.password;
      const query = "insert into user (name,email,password,phone_number) values (?,?,?,?)";
            con.query(query,[name, email, password, phone_number], function (error, result) {
                if (error) throw error;
                console.log(result);
            });
        });
    }
    }).listen(4000, () => {
        console.log("server has started");
    });
});