const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../../models/User');

//get all users
router.get('/', (req, res) => {
    User.find()
    .select('_id fullName avatar colorTheme email role')
    .exec()
    .then(result => {
        const response = {
            count: result.length,
            users: result
        }
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

// create a user
router.post('/', (req, res) => {
    User.find({email: req.body.email})
    .exec()
    .then(result => {
        if (result.length >= 1) {
            return res.status(409).json({
                message: 'That email is already taken'
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const user = new User({
                        fullName: req.body.fullName,
                        avatar: req.body.avatar,
                        colorTheme: req.body.colorTheme,
                        email: req.body.email,
                        password: hash,
                        role: req.body.role
                    });
                    user.save()
                    .then(() => {
                        res.status(201).json({
                            message: 'User created',
                            userCreated: user
                        });
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: err
                        });
                    });
                }
            })
        }
    })    
});

// update a user
router.patch('/:userId', (req, res) => {
    id = req.params.userId;
    User.findOneAndUpdate({_id: id}, req.body)
    .then(() => {
        res.status(200).json({
            message: 'User updated'
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

// get user details
router.get('/:userId', (req, res) => {
    id = req.params.userId;
    User.findById(id)
    .select('_id fullName colorTheme avatar email role notifications')
    .exec()
    .then(result => {
        if (result) {
            res.status(200).json({
                user: result
            });
        } else {
            res.status(404).json({
                message: 'User not found'
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })
});

// delete a user
router.delete('/:userId', (req, res) => {
    id = req.params.userId;
    User.remove({_id: id})
    .exec()
    .then(() => {
        res.status(200).json({
            message: 'User deleted'
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })
});

module.exports = router;