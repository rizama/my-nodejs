const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");


passport.use(
    new GoogleStrategy({
        // option for the strategy
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    }), () => {
        // passport callback
    }
);