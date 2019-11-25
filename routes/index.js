module.exports = app => {
  require("./categories")(app);
  require("./users")(app);
  require("./stories")(app);
  require("./comments")(app);
};
