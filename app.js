const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

const app = express();

// connect to MongoDB
mongoose.connect(
  "mongodb://localhost/storyShare",
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
mongoose.set("useCreateIndex", true);

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
require("./config/passport")(passport);

// initialize routes
require("./routes")(app);

// error handling
//404
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

//all
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
