const express = require('express');
const mongoose = require('mongoose');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// connect to mongoDB
mongoose.connect('mongodb://localhost/storyShare');
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// initialize routes
const categoriesRoutes = require('./Routes/Back/categories');
const usersRoutes = require('./Routes/Back/users');
const storiesRoutes = require('./Routes/Back/stories');
app.use('/categories', categoriesRoutes);
app.use('/users', usersRoutes);
app.use('/stories', storiesRoutes);

// error handling
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
     res.json({
         error: {
             message: error.message
         }
     });
});

module.exports = app;