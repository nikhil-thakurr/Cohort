const jwt = require('jsonwebtoken');
const User = require ("./user")

const authMiddleWare =async(req,res,next)=>{
    const authHeader = req.headers.authorization ;
    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            message: "Access Denied. No token provided.",
        });
    }

    const decoded = jwt.verify(token,"nik");

    const user = await User.findById({_id:decoded._id})
    req.user = user ;
    next();
}

module.exports = authMiddleWare