const usersController = require("../controllers/users");
const passport = require("passport");

module.exports = app => {
  app
    .route("/api/users")
    .get(
      passport.authenticate("jwt", { session: false }),
      usersController.getAll
    )
    .post(usersController.save);
  app
    .route("/api/users/:id")
    .get(passport.authenticate("jwt", { session: false }), usersController.get)
    .delete(usersController.delete)
    .patch(
      passport.authenticate("jwt", { session: false }),
      usersController.update
    );
  app.route("/api/register").post(usersController.register);
  app.route("/api/login").post(usersController.login);
};
