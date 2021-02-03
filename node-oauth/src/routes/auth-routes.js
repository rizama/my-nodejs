const { Router } = require("express");
const router = Router();
const passport = require("passport");

// auth login
router.get('/login', (req, res) => {
    res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send("logging out");
});

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', (req, res) => {
    res.send("You Reached the callback URI");
});

module.exports = router;