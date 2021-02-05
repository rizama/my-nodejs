const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/User");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

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
            done(null, currentUser);
        } else {
            const user = await User.create({
                username: profile.displayName,
                googleId: profile.id,
                email: profile._json.email
            });
            done(null, user);
        }

    })
);