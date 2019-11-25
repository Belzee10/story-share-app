const Category = require("../models/Category");
const Story = require("../models/Story");

/**
 * get all categories
 */
exports.getAll = (_, res) => {
  Category.find()
    .sort({ created_at: "desc" })
    .then(data => {
      res.status(200).json({
        result: data
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

/**
 * get stories by category
 */
exports.getStories = (req, res) => {
  const id = req.params.id;
  Story.find({ categories: id })
    .populate("author")
    .then(data => {
      res.status(200).json({
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
        result: data
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.get = (req, res) => {
  const id = req.params.id;
  Category.findOne({ _id: id })
    .then(data => {
      res.status(201).json({
        result: data
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
        message: "Category updated successfuly!"
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Story.remove({ categories: { $in: [id] } }).exec();
  Category.remove({ _id: id })
    .then(() => {
      Category.find()
        .sort({ created_at: "desc" })
        .then(data => {
          res.status(200).json({
            keys: Object.keys(Category.schema.paths),
            result: data,
            message: "Category deleted"
          });
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};
