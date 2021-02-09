const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = {
    requireAuth: (req, res, next) => {
        const cookie = req.cookies.jwt;

        if (!cookie) {
            return res.redirect("auth/login");
        }

        jwt.verify(cookie, process.env.KEY_JWT, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                return res.redirect("auth/login");
            } else {
                console.log("Check Auth JWT", decodedToken);
                next();
            }
        });
    },
    checkUser: (req, res, next) => {
        const cookie = req.cookies.jwt;
        
        if (!cookie) {
            res.locals.user_2 = null;
            return next();
        }

        jwt.verify(cookie, process.env.KEY_JWT, async (err, decodedToken) => {           
            if (err) {
                console.log(err.message);
                next();
            } else {
                console.log("Check User JWT", decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user_2 = user;
                next();
            }
        });
    }
};