const User = require("../models/User");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {

    const errors = {
        email: "",
        password: ""
    };

    console.log(err);

    if (err.message === 'incorrect email') {
        errors.email = 'that email is not registered';
    }

    if (err.message === 'incorrect password') {
        errors.password = 'wrong password';
    }

    if (err.code === 11000) {
        errors.email = "That email has been registered.";
        return errors;
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

module.exports.signup_get = (req, res) => {
    res.render('signup');
};

module.exports.signin_get = (req, res) => {
    res.render('signin');
};

const maxAge = 3 * 24 * 60 * 60; //in second
const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_STRING, {
        expiresIn: maxAge
    });
};

module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({
            email, password
        });
        const token = createToken(user._id);

        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });

        res.status(201).json({ user: user._id });

    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({ errors });
    }
};

module.exports.signin_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signin(email, password);

        // Create a jwt
        const token = createToken(user._id);
        
        // set jwt in cookies
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });

        res.status(200).send({ user: user._id });
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({ errors });
    }
};
