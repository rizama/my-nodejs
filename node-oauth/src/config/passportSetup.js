const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/User");

passport.serializeUser((user, cb) => {
    cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
    const user = await User.findById(id);
    cb(null, user);
});

passport.use(
    new GoogleStrategy({
        // option for the strategy
        callbackURL: '/auth/google/redirect',
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    }, async (accessToken, refreshToken, profile, cb) => {
        // Check if User Exist in out DB
        let currentUser = await User.findOne({
            googleId: profile.id
        });

        if (currentUser) {
            cb(null, currentUser);
        } else {
            const user = await User.create({
                username: profile.displayName,
                googleId: profile.id,
                email: profile._json.email,
                thumbnail: profile._json.picture
            });
            cb(null, user);
        }

    })
);