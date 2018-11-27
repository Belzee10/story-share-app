const storiesController = require("../controllers/stories");

module.exports = app => {
  app
    .route("/api/admin/stories")
    .get(storiesController.getAll)
    .post(storiesController.save);
  app
    .route("/api/admin/stories/:id")
    .get(storiesController.get)
    .delete(storiesController.delete)
    .patch(storiesController.update);
};
