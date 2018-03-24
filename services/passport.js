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
        process.nextTick(() => {
            User.findOne({
                $or: [{
                    'google.id': profile.id
                },
                {
                    'email': profile.emails[0].value
                }
                ]
            }, (err, user) => {
                if (err) return done(err);
    
                if (user) {
                    if (user.google.id == undefined) {
                        user.google.id = profile.id;
                        user.google.name = profile.displayName;
                        user.google.token = accessToken;
                        user.save();
    
                    }
                    return done(null, user);
                } else {
                    const newUser = new User();
                    newUser.google.id = profile.id;
                    newUser.google.name = profile.displayName;
                    newUser.google.token = accessToken;

                    newUser.email = profile.emails[0].value;
                    newUser.slika = profile.photos[0].value;
                    newUser.ime = `${profile.name.givenName} ${profile.name.familyName}`;

    
                    newUser.save((err) => {
                        if (err) throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
    }))
    

passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK_APP_ID,
    clientSecret: keys.FACEBOOK_APP_SECRET,
    callbackURL: keys.FACEBOOK_APP_CALLBACK,
    profileFields: ['id', 'emails', 'name']
}, (accessToken, refreshToken, profile, done) => {
       process.nextTick(() => {
        User.findOne({
            $or: [{
                'facebook.id': profile.id
            },
            {
                'email': profile.emails[0].value
            }
            ]
        }, (err, user) => {
            if (err) return done(err);

            if (user) {
                if (user.facebook.id == undefined) {
                    user.facebook.id = profile.id;
                    user.facebook.token = accessToken;
                    user.facebook.name = `${profile.name.givenName} ${profile.name.familyName}`;

                    user.slika = `https://graph.facebook.com/${profile.id}/picture?type=large`;
                    user.save();

                }
                return done(null, user);
            } else {
                const newUser = new User();
                newUser.facebook.id = profile.id;
                newUser.facebook.token = accessToken;
                newUser.facebook.name = `${profile.name.givenName} ${profile.name.familyName}`;

                newUser.email = profile._json.email;
                newUser.ime = `${profile.name.givenName} ${profile.name.familyName}`;
                newUser.slika = `https://graph.facebook.com/${profile.id}/picture?type=large`;

                newUser.save((err) => {
                    if (err) throw err;
                    return done(null, newUser);
                });
            }
        });
    });
}))
