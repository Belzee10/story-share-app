module.exports = app => {
  require("./back/categories")(app);
  require("./back/users")(app);
};
