const express = require('express');
const service = require('../../services/products')
const router = express.Router();
const verify = require('../../helpers/authHelper');


/*
 * GET ROUTES
 */
router.get('/', function (req, res) {
    service.get(req.query).then((response) => {
        res.status(response.status).send(response)
    })
});

router.get('/:id', function (req, res) {
    let id = req.params.id
    service.getById(id).then((response) => {
        res.status(response.status).send(response)
    })
});

router.get('/:id/categories', function (req, res) {
    let id = req.params.id
    service.getCategories(id).then((response) => {
        res.status(response.status).send(response)
    })
});

router.get('/:id/onedby', function (req, res) {
    let id = req.params.id
    service.getOnes(id).then((response) => {
        res.status(response.status).send(response)
    })
})

router.get('/:id/proposals', function (req, res) {
    let id = req.params.id
    service.getProposals(id).then((response) => {
        res.status(response.status).send(response)
    })
})


/*
 * POST ROUTES
 */
router.post('/',verify, function (req, res) {
    let data = req.body;
    service.post(data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

router.post('/:id/category/:category_id',verify, function (req, res) {
    let data = req.body;
    let product_id = req.params.id;
    let category_id = req.params.parent_id;
    service.postRelationship(product_id,category_id,data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});


/*
 * PUT ROUTES
*/

router.put('/:id',verify, function (req, res) {
    let data = req.body;
    service.update(req.params.id,data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

/*
 * DELETE ROUTES
 */
router.delete('/:id',verify, function (req, res) {
    let id = req.params.id
    let data = req.body;
    service.del(id,data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

router.delete('/:id/category/',verify, function (req, res) {
    let data = req.body;
    let id = req.params.id;
    service.deleteRelationship(id,data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});


module.exports = router;