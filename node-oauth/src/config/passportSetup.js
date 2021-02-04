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
        // passport callback
        console.log(profile);
        const user = await User.create({
            username: profile.displayName,
            googleId: profile.id,
            email: profile._json.email
        })

        console.log(user);
    })
);