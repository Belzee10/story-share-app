const usersController = require("../controllers/users");

module.exports = app => {
  app
    .route("/api/admin/users")
    .get(usersController.getAll)
    .post(usersController.save);
  app
    .route("/api/admin/users/:id")
    .get(usersController.get)
    .delete(usersController.delete)
    .patch(usersController.update);
};
