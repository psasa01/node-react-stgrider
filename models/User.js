const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    google: {
        id: String,
        name: String,
        token: String
    },
    facebook: {
        id: String,
        name: String,
        token: String
    },
    ime: {
        type: String,
        required: 'Molimo unesite korisničko ime',
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: 'Molimo unesite validan email',
        lowercase: true,
        trim: true,
        validate: [
            validator.isEmail,
            'Nažalost niste unijeli validnu email adresu!'
        ]
    },
    slika: String
});

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});

mongoose.model('users', userSchema);