const express = require('express')
const jwt = require('jsonwebtoken')
const verify = require('../helpers/authHelper')
const service = require('../services/users')
const router = express.Router()


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
    service.get({ "id": id }).then((response) => {
        res.status(response.status).send(response)
    })
});

router.get('/:id/products', function (req, res) {
    let id = req.params.id
    service.getProducts({ "id": id }).then((response) => {
        res.status(response.status).send(response)
    })
});

router.get('/:id/ones', function (req, res) {
    let id = req.params.id
    service.getOnes({ "id": id }).then((response) => {
        res.status(response.status).send(response)
    })
})

router.get('/:id/proposals/accepted', function (req, res) {
    let id = req.params.id
    service.getAcceptedProposals({ "id": id }).then((response) => {
        res.status(response.status).send(response)
    })
})

router.get('/:id/proposals/posted', function (req, res) {
    let id = req.params.id
    service.getPostedProposals({ "id": id }).then((response) => {
        res.status(response.status).send(response)
    })
})

router.get('/:id/categories', function (req, res) {
    let id = req.params.id
    service.getCategories({ "id": id }).then((response) => {
        res.status(response.status).send(response)
    })
})


/*
 * POST ROUTES
 */
router.post('/', verify, function (req, res) {
    let data = req.body;
    let auth = jwt.decode(req.headers["auth-token"])
    service.post(data, auth)
        .then((response) => {
            res.status(response.status || 404).send(response)
        })
});

router.post('/:id/one/:ProductId', verify, function (req, res) {
    let data = req.params;
    let auth = jwt.decode(req.headers["auth-token"])
    service.postOne(data, auth)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

router.post('/:id/category/:CategoryId', verify, function (req, res) {
    let data = req.params;
    let auth = jwt.decode(req.headers["auth-token"])
    service.postWatchCategory(data, auth)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

router.post('/:id/proposal/:ProposalId', verify, function (req, res) {
    let data = req.params;
    let auth = jwt.decode(req.headers["auth-token"])
    service.postAcceptProposal(data, auth)
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
    service.update(data, auth)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

/*
 * DELETE ROUTES
 */

router.delete('/:id/one/:ProductId', verify, function (req, res) {
    let data = req.params;
    let auth = jwt.decode(req.headers["auth-token"])
    service.deleteOne(data, auth)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

router.delete('/:id/category/:CategoryId', verify, function (req, res) {
    let data = req.params;
    let auth = jwt.decode(req.headers["auth-token"])
    service.deleteWatch(data,auth)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

router.delete('/:id/proposal/:ProposalId', verify, function (req, res) {
    let data = req.params;
    let auth = jwt.decode(req.headers["auth-token"])
    service.deleteAcceptance(data, auth)
        .then((response) => {
            res.status(response.status).send(response)
        })
});


module.exports = router;