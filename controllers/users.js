const User = require("../models/User");
const Story = require("../models/Story");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

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
  const { fullName, email, password, role } = req.body;
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
            email,
            password,
            role
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
              if (err) throw err;
              user.password = hash;
              user
                .save()
                .then(data => {
                  res.status(201).json({
                    message: "User created successfuly!",
                    result: user
                  });
                })
                .catch(err => {
                  res.status(500).json(err);
                });
            });
          });
        }
      });
    }
  });
};

exports.get = (req, res) => {
  const id = req.params.id;
  User.findOne({ _id: id })
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
  User.findOneAndUpdate({ _id: id }, req.body)
    .then(data => {
      res.status(201).json({
        message: "User updated successfuly!"
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Story.remove({ author: id }).exec();
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

exports.register = (req, res) => {};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, fullName: user.fullName };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            return res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({
          message: "Password incorrect"
        });
      }
    });
  });
};
