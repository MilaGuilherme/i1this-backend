const express = require('express');
const read = require('../../repositories/categories/readCategories')
const write = require('../../repositories/categories/writeCategories')
const router = express.Router();
const db = require('../../db/db')

router.get('/', function (req, res) {
    read.getCategories().then((response) => {
        console.log
        res.send(response);
    })
});

router.get('/:category_id', function (req, res) {
    res.send('getCategoryById');
})

router.get('/:category_id/products', function (req, res) {
    res.send('getCategoryProducts');
})

router.get('/:category_id/watchers', function (req, res) {
    res.send('getCategoryWatchers');
})

router.get('/:category_id/parents', function (req, res) {
    res.send('getCategoryParents');
})

router.get('/:category_id/children', function (req, res) {
    res.send('getCategoryChildren');
})

router.delete('/:category_id', function (req, res) {
    write.removeCategory(req.params.category_id,1).then((response) => {
        console.log
        res.send(response);
    })
});
module.exports = router;