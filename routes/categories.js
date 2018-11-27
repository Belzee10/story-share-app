const categoriesController = require("../controllers/categories");

module.exports = app => {
  app
    .route("/api/admin/categories")
    .get(categoriesController.getAll)
    .post(categoriesController.save);
  app
    .route("/api/admin/categories/:id")
    .get(categoriesController.get)
    .delete(categoriesController.delete)
    .patch(categoriesController.update);
};
