const authController = require('../controllers/authController');
const passport = require('passport');

module.exports = (app) => {

    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        }));

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {

            req.flash('success', 'You successfully logged in with Google!');
            res.redirect('/');
        }

    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        req.flash({ 'success': 'You successfully logged out!' });
        res.redirect('/');
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })

    app.get(
        '/auth/facebook',
        passport.authenticate('facebook', {
            scope: ['public_profile', 'email']
        }));
    app.get(
        '/auth/facebook/callback',
        passport.authenticate('facebook'));

    app.post('/auth/register',
        authController.validateRegister,
        authController.register
    )

    app.post('/auth/login', passport.authenticate('local'), (req, res) => {
        req.flash({ 'success': 'Login Successfull!' });
        console.log('flash: ', res);
        res.redirect('/');
    });
}