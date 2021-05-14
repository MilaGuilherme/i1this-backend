var express = require('express');
var categoriesRouter = express.Router();

categoriesRouter.get('/categories', function (req, res) {
    res.send('getCategories');
})

categoriesRouter.get('categories/{category_id}', function (req, res) {
    res.send('getCategoryById');
})

categoriesRouter.get('categories/{category_id}/products', function (req, res) {
    res.send('getCategoryProducts');
})

categoriesRouter.get('categories/{category_id}/watchers', function (req, res) {
    res.send('getCategoryWatchers');
})

categoriesRouter.get('categories/{category_id}/parents', function (req, res) {
    res.send('getCategoryParents');
})

categoriesRouter.get('categories/{category_id}/children', function (req, res) {
    res.send('getCategoryChildren');
})

module.exports = categoriesRouter;