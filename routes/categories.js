const categoriesController = require("../controllers/categories");

module.exports = app => {
  app.route("/api/categories/stories/:id").get(categoriesController.getStories);
  app
    .route("/api/categories")
    .get(categoriesController.getAll)
    .post(categoriesController.save);
  app
    .route("/api/categories/:id")
    .get(categoriesController.get)
    .delete(categoriesController.delete)
    .patch(categoriesController.update);
};
