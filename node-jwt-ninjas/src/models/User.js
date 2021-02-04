const { string } = require("joi");
const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

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

// Fire a function before doc saved to db
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// static method to login user
userSchema.statics.signin = async function (email, pass) {
    const user = await this.findOne({ email });

    if (user) {
        const auth = await bcrypt.compare(pass, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password')
    }

    throw Error('incorrect email');
};

const User = mongoose.model('user', userSchema); //in Collection Mongodb User will be Plural 'users'

module.exports = User;