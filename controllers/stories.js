const Story = require("../models/Story");

exports.getAll = (req, res) => {
  Story.find()
    .sort({ created_at: "desc" })
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
  const { title, coverImage, content, categories, author } = req.body;
  const story = new Story({
    title,
    coverImage,
    content,
    categories,
    author
  });
  story
    .save()
    .then(data => {
      res.status(201).json({
        message: "Story created",
        result: data
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Story.findOneAndUpdate({ _id: id }, req.body)
    .then(data => {
      res.status(201).json({
        message: "Story updated"
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Story.remove({ _id: id })
    .then(data => {
      res.status(200).json({
        message: "Story removed"
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};
