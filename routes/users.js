const usersController = require("../controllers/users");

module.exports = app => {
  app
    .route("/admin/users")
    .get(usersController.getAll)
    .post(usersController.save);
  app
    .route("/admin/users/:id")
    .delete(usersController.delete)
    .patch(usersController.update);
};
