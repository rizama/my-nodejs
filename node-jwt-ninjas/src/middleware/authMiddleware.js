const jwt = require("jsonwebtoken");

module.exports = {
    requireAuth: (req, res, next) => {
        const cookie = req.cookies?.jwt;

        // check cookie exist or not
        if (!cookie) {
            res.redirect('/signin');
        }

        // verify jwt
        jwt.verify(cookie, process.env.SECRET_STRING, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/signin');
            } else {
                console.log(decodedToken);
                next();
            }
        });
    }
};