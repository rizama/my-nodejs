const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/User");

passport.use(
    new GoogleStrategy({
        // option for the strategy
        callbackURL: '/auth/google/redirect',
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    }, async (accessToken, refreshToken, profile, done) => {
        // Check if User Exist in out DB
        let currentUser = await User.findOne({
            googleId: profile.id
        });

        if (currentUser) {
            console.log("user is", currentUser);
        } else {
            const user = await User.create({
                username: profile.displayName,
                googleId: profile.id,
                email: profile._json.email
            });
        }

    })
);