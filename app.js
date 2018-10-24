const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// connect to MongoDB
mongoose.connect(
  "mongodb://localhost/storyShare",
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// initialize routes
require("./routes")(app);

// const categoriesRoutes = require("./routes/back/categories");
// const usersRoutes = require("./routes/back/users");
// const storiesRoutes = require("./routes/back/stories");
// app.use("/categories", categoriesRoutes);
// app.use("/users", usersRoutes);
// app.use("/stories", storiesRoutes);

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
