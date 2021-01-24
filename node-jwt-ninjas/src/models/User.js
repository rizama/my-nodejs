const { string } = require("joi");
const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        required: [true, 'Please enter a password'],
        type: String,
        minlength: [5, 'Minimum password length is 5 characters']
    }
});

// Fire a function after doc saved to db
userSchema.post('save', function (doc, next) {
    console.log('new user was created & save', doc);
    next();
})

// Fire a function before doc saved to db
userSchema.pre('save', function (next) {
    console.log('user about tobe created & save', this);
    next();
})

const User = mongoose.model('user', userSchema);

module.exports = User;