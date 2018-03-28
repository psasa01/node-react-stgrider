const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');
const passportLocalMongoose = require('passport-local-mongoose');
const md5 = require('md5');

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
},
    // https://stackoverflow.com/questions/13133911/cant-get-mongoose-virtuals-to-be-part-of-the-result-object
    {
        toObject: { virtuals: true }
    });

userSchema.virtual('gravatar').get(function () {
    const hash = md5(this.email);
    return `https://gravatar.com/avatar/${hash}?s=50`;
});

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
});

mongoose.model('users', userSchema);