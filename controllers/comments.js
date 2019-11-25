const Comment = require("../models/Comment");
const Story = require("../models/Story");

/**
 * get comments by story
 */
exports.getAll = (req, res) => {
  const storyId = req.params.id;
  Comment.find({ story: storyId })
    .sort({ created_at: "asc" })
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
 * create comment
 */
exports.save = (req, res) => {
  const { content, user } = req.body;
  const story = req.params.id;
  const comment = new Comment({
    content,
    user,
    story
  });
  comment
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
