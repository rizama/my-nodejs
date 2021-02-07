const { Router } = require("express");
const router = Router();
const passport = require("passport");

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    req.logout();
    res.redirect("/");
});

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // res.send(req.user);
    res.cookie('sam', process.env.KEY_SESSION_COOKIE, {
        maxAge: 12 * 60 * 60 * 1000
    });
    res.redirect('/profile');
});

module.exports = router;