const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleId: String,
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
    }
});

const User = mongoose.model('user', userSchema); //in Collection Mongodb User will be Plural 'users'

module.exports = User;