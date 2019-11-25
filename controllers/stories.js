const Story = require("../models/Story");

/**
 * get all stories
 */
exports.getAll = (req, res) => {
  Story.find()
    .sort({ created_at: "desc" })
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

/**
 * get popular stories
 */
exports.getPopular = (req, res) => {
  Story.find()
    .sort({ likes: "desc" })
    .populate("author")
    .limit(4)
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
 * create story
 */
exports.save = (req, res) => {
  const { title, image, content, categories, author } = req.body;
  const story = new Story({
    title,
    image,
    content,
    categories,
    author
  });
  story
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

/**
 * get story
 */
exports.get = (req, res) => {
  const id = req.params.id;
  Story.findOne({ _id: id })
    .populate("author")
    .then(data => {
      res.status(201).json({
        result: data
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

/**
 * update story
 */
exports.update = (req, res) => {
  const id = req.params.id;
  Story.findOneAndUpdate({ _id: id }, { $set: req.body }, { new: true })
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

/**
 * delete story
 */
exports.delete = (req, res) => {
  const id = req.params.id;
  Story.remove({ _id: id })
    .then(() => {
      res.status(200).json({
        message: "Story deleted"
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};
