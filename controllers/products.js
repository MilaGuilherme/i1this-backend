const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const verify = require('../helpers/authHelper')
const service = require('../services/products')



/*
 * GET ROUTES
 */
router.get('/', function (req, res) {
    service.get(res.params,order=req.query.order,limit=req.query.limit).then((response) => {
        res.status(response.status).send(response)
    })
});

router.get('/:id', function (req, res) {
    let id = req.params.id
    service.get({ "id": id }).then((response) => {
        res.status(response.status).send(response)
    })
});

router.get('/:id/categories', function (req, res) {
    let id = req.params.id
    service.getCategories({ "id": id }).then((response) => {
        res.status(response.status).send(response)
    })
});

router.get('/:id/onedby', function (req, res) {
    let id = req.params.id
    service.getOnes({ "id": id }).then((response) => {
        res.status(response.status).send(response)
    })
})

router.get('/:id/proposals', function (req, res) {
    let id = req.params.id
    service.getProposals({ "id": id }).then((response) => {
        res.status(response.status).send(response)
    })
})


/*
 * POST ROUTES
 */
router.post('/', verify, function (req, res) {
    let data = req.body;
    let auth = jwt.decode(req.headers["auth-token"])
    console.log(data)
    service.post(data,auth)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

router.post('/:id/category/:CategoryId', verify, function (req, res) {
    let data = req.params;
    let auth = jwt.decode(req.headers["auth-token"])
    service.postRelationship(data,auth)
        .then((response) => {
            res.status(response.status).send(response)
        })
});


/*
 * PUT ROUTES
*/

router.put('/:id', verify, function (req, res) {
    let data = req.body;
    data.id = req.params.id
    let auth = jwt.decode(req.headers["auth-token"])
    service.update(data,auth)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

/*
 * DELETE ROUTES
 */
router.delete('/:id', verify, function (req, res) {
    let data = req.params;
    let auth = jwt.decode(req.headers["auth-token"])
    service.del(data,auth)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

router.delete('/:id/category/:CategoryId', verify, function (req, res) {
    let data = req.params;
    let auth = jwt.decode(req.headers["auth-token"])
    service.deleteRelationship(data,auth)
        .then((response) => {
            res.status(response.status).send(response)
        })
});


module.exports = router;