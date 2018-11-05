const categoriesController = require("../controllers/categories");

module.exports = app => {
  app
    .route("/admin/categories")
    .get(categoriesController.getAll)
    .post(categoriesController.save);
  app
    .route("/admin/categories/:id")
    .delete(categoriesController.delete)
    .patch(categoriesController.update);
};
