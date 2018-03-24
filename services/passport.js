const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
});
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        User.findOne({ email: profile.emails[0].value }).then(existingUser => {
            if (existingUser.googleId === profile.id) {
                done(null, existingUser);
            } else if (existingUser.googleId === undefined) {
                existingUser({ 
                    googleId: profile.id,
                    googleName: profile.displayName
                })
                    .save()
                    .then(user => done(null, user));
            } else {
                new User ({
                    googleId: profile.id,
                    googleName: profile.displayName,
                    email: profile.emails[0].value
                })
            }
        });
    }
))

passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK_APP_ID,
    clientSecret: keys.FACEBOOK_APP_SECRET,
    callbackURL: 'https://shrouded-coast-13620.herokuapp.com/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    User.findOne({ email: profile.emails[0].value }).then(existingUser => {
        if (existingUser.fbId === profile.id) {
            done(null, existingUser);
        } else if (existingUser.fbId === undefined) {
            existingUser({ 
                fbId: profile.id,
                fbName: profile.name
            })
                .save()
                .then(user => done(null, user));
        } else {
            new User ({
                fbId: profile.id,
                fbName: profile.name,
                email: profile.emails[0].value
            })
        }
    });
}));