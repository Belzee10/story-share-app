const storiesController = require("../../controllers/stories");

module.exports = app => {
  app
    .route("/stories")
    .get(storiesController.getAll)
    .post(storiesController.save);
  app
    .route("/stories/:id")
    .delete(storiesController.delete)
    .patch(storiesController.update);
};
