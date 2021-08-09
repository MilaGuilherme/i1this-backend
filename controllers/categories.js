const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const service = require('../services/categories')
const verify = require('../helpers/authHelper');


/*
 * GET ROUTES
 */
router.get('/', function (req, res) {
    service.get().then((response) => {
        res.status(response.status).send(response)
    })
});

router.get('/:id', function (req, res) {
    let id = req.params.id
    service.getById(id).then((response) => {
        res.status(response.status).send(response)
    })
});

router.get('/:id/products', function (req, res) {
    let id = req.params.id
    service.getProducts(id).then((response) => {
        res.status(response.status).send(response)
    })
});

router.get('/:id/watchers', function (req, res) {
    let id = req.params.id
    service.getWatchers(id).then((response) => {
        res.status(response.status).send(response)
    })
})

router.get('/:id/parents', function (req, res) {
    let id = req.params.id
    service.getParents(id).then((response) => {
        res.status(response.status).send(response)
    })
})

router.get('/:id/children', function (req, res) {
    let id = req.params.id
    service.getChildren(id).then((response) => {
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

router.post('/:id/parents/:parent_id',verify, function (req, res) {
    let data = req.body;
    let child_id = req.params.id;
    let parent_id = req.params.parent_id;
    service.postRelationship(parent_id,child_id,data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

router.post('/:id/children/:child_id',verify, function (req, res) {
    let data = req.body;
    let child_id = req.params.child_id;
    let parent_id = req.params.id;
    service.postRelationship(parent_id,child_id,data)
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

router.delete('/:id/parents/:parent_id',verify, function (req, res) {
    let data = req.body;
    let child_id = req.params.id;
    let parent_id = req.params.parent_id;
    service.deleteRelationship(parent_id,child_id,data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

router.delete('/:id/children/:child_id',verify, function (req, res) {
    let data = req.body;
    let child_id = req.params.child_id;
    let parent_id = req.params.id;
    service.deleteRelationship(parent_id,child_id,data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

module.exports = router;