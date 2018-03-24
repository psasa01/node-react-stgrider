const mongoose = require('mongoose');
const { Schema } = mongoose;

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
    email: String,
    ime: String,
    slika: String
});

mongoose.model('users', userSchema);