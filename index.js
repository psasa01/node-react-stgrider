const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./config/keys');

const app = express();

app.get('/', (req, res) => {
    res.send({
        hi: 'there'
    })
} )

passport.use(new GoogleStrategy(
    {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, accessToken => {
    console.log(accessToken);
}));

passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK_APP_ID, 
    clientSecret: keys.FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
}, accessToken => {
    console.log(accessToken);
}));

app.get(
    '/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
}));

app.get(
    '/auth/facebook',
    passport.authenticate('facebook'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server started on port ' + PORT)
});