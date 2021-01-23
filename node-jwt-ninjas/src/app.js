const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require("mongoose");
const path = require('path');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

// database connection
const dbURI = `mongodb+srv://sam:${process.env.PASS_MONGO_DB}@cluster0.khpxa.mongodb.net/node-auth`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// routes
console.log(__dirname);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
