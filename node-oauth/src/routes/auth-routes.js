const { Router } = require("express");
const router = Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    req.logout();
    
    // remove JWT
    res.cookie('jwt', '', { maxAge: 1 });
    
    res.redirect("/");
});

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

const maxAge = 1 * 24 * 60 * 60; //1 days in seconds
const createToken = (id) => {
    return jwt.sign({ id }, process.env.KEY_JWT, {
        expiresIn: maxAge
    });
};

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    const token = createToken(req.user.id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.redirect('/profile');
});

module.exports = router;