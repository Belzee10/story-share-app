const express = require('express');
const router = express.Router();

const Story = require('../../models/Story');

// get all stories
router.get('/', (req, res) => {
    Story.find()
    .exec()
    .then(result => {
        const response = {
            count: result.length,
            stories: result
        };
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

// create a story
router.post('/', (req, res) => {
    const story = new Story({
        title: req.body.title,
        header_img: req.body.header_img,
        content: req.body.content,
        categories: req.body.categories,
        author: req.body.author        
    });
    story.save().then(result => {
        res.status(201).json({
            message: 'Story created',
            storyCreated: result
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });    
});

// get story details
router.get('/:storyId', (req, res) => {
    const id = req.params.storyId;
    Story.findById(id)
    .exec()
    .then(result => {
        if (result) {
            res.status(200).json({
                story: result
            });
        } else {
            res.status(404).json({
                message: 'Story not found'
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

//update a story
router.patch('/:storyId', (req, res) => {
    id = req.params.storyId;
    Story.findOneAndUpdate({_id: id}, req.body)
    .exec()
    .then(() => {
        res.status(201).json({
            message: "Story updated"
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })
});

// delete a story
router.delete('/:storyId', (req, res) => {
    const id = req.params.storyId;
    Story.findByIdAndRemove(id)
    .exec()
    .then(() => {
        res.status(200).json({
            message: 'Story deleted'
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })
});

module.exports = router;