const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const expressValidator = require('express-validator');
const passport = require('passport');
const keys = require('./config/keys');
const flash = require('connect-flash');

// user always must be required before passport!!!!!!!
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();



// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// validation
app.use(expressValidator());

app.get('/user', (req, res) => {
    res.send({
        hi: req.user
    })
})

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // main.js, main.css
    app.use(express.static('client/build'));

    // Express will serve up index.html 
    // if it doesn't recognize the route!
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server started on port ' + PORT)
});



