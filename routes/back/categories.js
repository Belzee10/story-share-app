const categoriesController = require("../../controllers/categories");

module.exports = app => {
  app
    .route("/categories")
    .get(categoriesController.getAll)
    .post(categoriesController.save);
  app
    .route("/categories/:id")
    .delete(categoriesController.delete)
    .patch(categoriesController.update);
};
