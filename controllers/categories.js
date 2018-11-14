const Category = require("../models/Category");

exports.getAll = (req, res) => {
  Category.find()
    .sort({ created_at: "desc" })
    .then(data => {
      res.status(200).json({
        keys: Object.keys(Category.schema.paths),
        result: data
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.save = (req, res) => {
  const { name } = req.body;
  const category = new Category({ name });
  category
    .save()
    .then(data => {
      res.status(201).json({
        message: "Category created",
        result: category
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Category.findOneAndUpdate({ _id: id }, req.body)
    .then(data => {
      res.status(201).json({
        message: "Category updated"
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Category.remove({ _id: id })
    .then(() => {
      Category.find()
        .sort({ created_at: "desc" })
        .then(data => {
          res.status(200).json({
            result: data,
            message: "Category deleted"
          });
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};
