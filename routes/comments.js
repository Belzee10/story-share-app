const commentsController = require("../controllers/comments");

module.exports = app => {
  app
    .route("/api/story/comments/:id")
    .get(commentsController.getAll)
    .post(commentsController.save);
};
