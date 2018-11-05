const storiesController = require("../controllers/stories");

module.exports = app => {
  app
    .route("/admin/stories")
    .get(storiesController.getAll)
    .post(storiesController.save);
  app
    .route("/admin/stories/:id")
    .delete(storiesController.delete)
    .patch(storiesController.update);
};
