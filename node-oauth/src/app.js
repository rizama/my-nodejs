const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const authRoute = require("./routes/auth-routes");
const profileRoutes = require('./routes/profile-routes');
const mongoose = require("mongoose");
const cookieSession = require('cookie-session');
const cookieParser = require("cookie-parser");
const passport = require('passport');
const { requireAuth, checkUser } = require("./middlewares/authMiddleware");

require('dotenv').config();

require("./config/passportSetup");

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.KEY_SESSION_COOKIE]
}));
app.use(cookieParser());

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// connect mongodb
const dbURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.khpxa.mongodb.net/${process.env.MONGO_DBNAME}`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => console.log("Connected To Mongodb"))
  .catch((e) => console.log(e));

app.get('*', checkUser);
app.get('/sam', requireAuth, (req, res) => res.send("This Route just using JWT Cookies Checking"));
app.use('/auth', authRoute);
app.use('/profile', profileRoutes);

app.get('/', (req, res) => {
  res.render('home', { user: req.user });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
