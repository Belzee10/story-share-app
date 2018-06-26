const express = require('express');
const router = express.Router();

const Category = require('../../models/Category');

// get all categories
router.get('/', (req, res) => {
    Category.find()
    .select('_id name')
    .exec()
    .then(result => {
        const response = {
            count: result.length,
            categories: result
        }
        res.status(200).json(response);        
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

// create a category
router.post('/', (req, res) => {  
    const category = new Category({
        name: req.body.name
    });
    category.save().then(result => {
        res.status(201).json({
            message: 'Category created',
            categoryCreated: category
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    }); 
});

// get category details
router.get('/:categoryId', (req, res) => {
    const id = req.params.categoryId;
    Category.findById(id)
    .select('_id name')
    .exec()
    .then(result => {
        if (result) {
            res.status(200).json({
                category: result
            });
        } else {
            res.status(404).json({
                message: 'Category not found'
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });    
});

// update a category
router.patch('/:categoryId', (req, res) => {
    const id = req.params.categoryId;    
    Category.findOneAndUpdate({_id: id}, req.body)
    .then(() => {
        res.status(201).json({
            message: 'Category updated'
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

// delete a category
router.delete('/:categoryId', (req, res) => {
    const id = req.params.categoryId;
    Category.remove({_id: id})
    .exec()
    .then(() => {
        res.status(200).json({
            message: 'Category deleted'
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;