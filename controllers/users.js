const User = require("../models/User");
const Story = require("../models/Story");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * get all users
 */
exports.getAll = (_, res) => {
  User.find()
    .sort({ created_at: "desc" })
    .then(data => {
      const newData = [...data].map(item => ({
        _id: item._id,
        name: item.name,
        lastName: item.lastName,
        avatar: item.avatar,
        email: item.email,
        role: item.role
      }));
      res.status(200).json({
        result: newData
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

/**
 * get user
 */
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

/**
 * update user
 */
exports.update = (req, res) => {
  const id = req.params.id;
  User.findOneAndUpdate({ _id: id }, { $set: req.body }, { new: true })
    .then(data => {
      res.status(200).json({
        result: data
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

/**
 * register a user
 */
exports.register = (req, res) => {
  const { name, lastName, email, password } = req.body;

  User.findOne({ email }).then(user => {
    if (user) {
      return res.status(409).json({
        error: "User already exists"
      });
    } else {
      const newUser = new User({
        name,
        lastName,
        email,
        password,
        role: "member"
      });
      bcrypt.genSalt(10, (_, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, name: user.name };
              jwt.sign(payload, "secret", { expiresIn: 3600 }, (err, token) => {
                const result = { ...user._doc };
                result.token = `Bearer ${token}`;
                return res.status(200).json({
                  result
                });
              });
            })
            .catch(err => {
              res.status(500).json(err);
            });
        });
      });
    }
  });
};

/**
 * login a user
 */
exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({
        error: "Invalid Email"
      });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, name: user.name };
        jwt.sign(payload, "secret", { expiresIn: 3600 }, (err, token) => {
          return res.status(200).json({
            result: `Bearer ${token}`
          });
        });
      } else {
        return res.status(400).json({
          error: "Invalid Password"
        });
      }
    });
  });
};
