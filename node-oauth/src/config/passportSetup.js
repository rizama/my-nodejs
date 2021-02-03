const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");


passport.use(
    new GoogleStrategy({
        // option for the strategy
        callbackURL: '/auth/google/redirect',
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback
        console.log(profile);
    })
);