const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// connect to mongoDB
mongoose.connect(
  "mongodb://localhost/storyShare",
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// initialize routes
const categoriesRoutes = require("./routes/back/categories");
const usersRoutes = require("./routes/back/users");
const storiesRoutes = require("./routes/back/stories");
app.use("/categories", categoriesRoutes);
app.use("/users", usersRoutes);
app.use("/stories", storiesRoutes);

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
