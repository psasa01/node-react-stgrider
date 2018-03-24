const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    googleName: String,
    fbId: String,
    fbName: String,
    email: String,
});

mongoose.model('users', userSchema);