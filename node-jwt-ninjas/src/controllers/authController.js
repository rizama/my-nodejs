module.exports.signup_get = (req, res) => {
    res.render('signup');
}

module.exports.signin_get = (req, res) => {
    res.render('signin');
}

module.exports.signup_post = (req, res) => {
    res.send('new signup');
}

module.exports.signin_post = (req, res) => {
    res.send('user login');
}
