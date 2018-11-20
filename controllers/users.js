const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.getAll = (req, res) => {
  User.find()
    .sort({ created_at: "desc" })
    .then(data => {
      res.status(200).json({
        keys: Object.keys(User.schema.paths),
        result: data
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.save = (req, res) => {
  const { fullName, avatar, email, password, role } = req.body;
  User.find({ email }).then(data => {
    if (data.length > 0) {
      return res.status(409).json({
        message: "That email is already taken"
      });
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json(err);
        } else {
          const user = new User({
            fullName,
            avatar,
            email,
            password,
            role
          });
          user
            .save()
            .then(data => {
              res.status(201).json({
                message: "User created successful!",
                result: user
              });
            })
            .catch(err => {
              res.status(500).json(err);
            });
        }
      });
    }
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  User.findOneAndUpdate({ _id: id }, req.body)
    .then(data => {
      res.status(201).json({
        message: "User updated"
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  User.remove({ _id: id })
    .then(() => {
      User.find()
        .sort({ created_at: "desc" })
        .then(data => {
          res.status(200).json({
            keys: Object.keys(User.schema.paths),
            result: data,
            message: "User deleted"
          });
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};
