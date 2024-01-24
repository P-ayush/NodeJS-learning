const http = require("http");

http.createServer((req, res) => {
    if (req.url === "/") {
        if (req.method === "GET") {
            res.end("this is a get request");
        } else if (req.method === "POST") {
        console.log(req.body);
            res.end("post request created");
        }
    }
}).listen(4000, () => {
    console.log("server has started");
});
