const storiesController = require("../controllers/stories");
const passport = require("passport");

module.exports = app => {
  app.route("/api/stories/popular").get(storiesController.getPopular);
  app
    .route("/api/stories")
    .get(storiesController.getAll)
    .post(
      passport.authenticate("jwt", { session: false }),
      storiesController.save
    );
  app
    .route("/api/stories/:id")
    .get(storiesController.get)
    .delete(
      passport.authenticate("jwt", { session: false }),
      storiesController.delete
    )
    .patch(
      passport.authenticate("jwt", { session: false }),
      storiesController.update
    );
};
