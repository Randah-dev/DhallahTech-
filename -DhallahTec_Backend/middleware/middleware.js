const jwt    = require('jsonwebtoken');
const multer = require('multer');


//initlize protect and allow to run backend with the firebase
exports.protect = async (req, res, next) => {

    let token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: "غير مصرح لك" });
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "توكن غير صالح" });
    }
};


exports.allow = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: "ليس لديك صلاحية" });
        }
        next();
    };
};