const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = {
    requireAuth: (req, res, next) => {
        const cookie = req.cookies?.jwt;

        // check cookie exist or not
        if (!cookie) {
            return res.redirect('/signin');
        }

        // verify jwt
        jwt.verify(cookie, process.env.SECRET_STRING, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                return res.redirect('/signin');
            } else {
                console.log(decodedToken);
                next();
            }
        });
    },

    checkUser: (req, res, next) => {
        const cookie = req.cookies?.jwt;

        // check cookie exist or not
        if (!cookie) {
            res.locals.user = null;
            next();
        }

        // verify jwt
        jwt.verify(cookie, process.env.SECRET_STRING, async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            } else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    }
};