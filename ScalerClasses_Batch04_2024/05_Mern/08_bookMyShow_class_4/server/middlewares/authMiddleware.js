const jwt = require("jsonwebtoken");


const auth = (req, res, next) => {
    try {
        console.log("Req Headers:", req.headers.authorization);
        
        const token = req.headers.authorization.split(" ")[1];
        console.log("Token: ", token);
        
        const verifiedToken = jwt.verify(token,process.env.JWT_SECRET);
        
        console.log("Verified token", verifiedToken);
        req.body.userId = verifiedToken.userId;
        console.log("req.body.userId: ", req.body.userId)
        next();
    } catch (err) {
        res.status(401).json({ sucess: false, message: "Token Invalid" });

    }
};

module.exports = auth;