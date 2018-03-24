const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// user always must be required before passport!!!!!!!
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send({
        hi: 'there'
    })
} )

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server started on port ' + PORT)
});


// mongodb://sgrider_prod:sgrider@ds123029.mlab.com:23029/sgrider-node-react-prod
// 104663614997-mbv4id0hoek2bansfsvuu1an8lp5t9ti.apps.googleusercontent.com
// 1A0enV9XuAWzGT0pwjYcE3r9