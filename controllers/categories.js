const Category = require("../models/Category");

exports.getAll = (req, res) => {
  Category.find()
    .then(data => {
      res.status(200).json({
        count: data.length,
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
