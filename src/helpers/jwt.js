const jwt = require("jsonwebtoken");

const jwtAuthMiddleWare = (req, res, next) => {

    const authorization =req.headers.authorization;
    if(!authorization) return res.status(400).json({error:"token not found"});
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(400).json({ error: "unauthorized" });
    try {
        const payload = jwt.verify(token, "ayush");
        req.user = payload;
        next();
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: "invalid token" });
    }
}

const generateToken = (userData) => {
    return jwt.sign(userData, "ayush");
}

module.exports = {
    jwtAuthMiddleWare,
    generateToken
}