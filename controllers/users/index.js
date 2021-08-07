const express = require('express');
const verify = require('../../helpers/authHelper');
const service = require('../../services/users')
const router = express.Router();


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

router.get('/:id/ones', function (req, res) {
    let id = req.params.id
    service.getOnes(id).then((response) => {
        res.status(response.status).send(response)
    })
})

router.get('/:id/proposals/accepted', function (req, res) {
    let id = req.params.id
    service.getAcceptedProposals(id).then((response) => {
        res.status(response.status).send(response)
    })
})

router.get('/:id/proposals/posted', function (req, res) {
    let id = req.params.id
    service.getPostedProposals(id).then((response) => {
        res.status(response.status).send(response)
    })
})

router.get('/:id/categories', function (req, res) {
    let id = req.params.id
    service.getCategories(id).then((response) => {
        res.status(response.status).send(response)
    })
})


/*
 * POST ROUTES
 */
router.post('/', function (req, res) {
    let data = req.body;
    service.post(data)
        .then((response) => {
            res.status(response.status || 404).send(response)
        })
});

router.post('/:id/one/:product_id', verify, function (req, res) {
    let data = req.body;
    let user_id = req.params.id;
    let product_id = req.params.parent_id;
    service.postOne(user_id, product_id, data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

router.post('/:id/category/:category_id', verify, function (req, res) {
    let data = req.body;
    let user_id = req.params.id;
    let category_id = req.params.parent_id;
    service.postWatchCategory(user_id, category_id, data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

router.post('/:id/proposals/:proposal_id', verify, function (req, res) {
    let data = req.body;
    let user_id = req.params.id;
    let proposal_id = req.params.parent_id;
    service.postAcceptProposal(user_id, proposal_id, data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});


/*
 * PUT ROUTES
*/

router.put('/:id', verify, function (req, res) {
    let data = req.body;
    service.update(req.params.id, data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

/*
 * DELETE ROUTES
 */

router.delete('/:id/one/:product_id', verify, function (req, res) {
    let data = req.body;
    let user_id = req.params.id;
    let product_id = req.params.product_id;
    service.deleteOne(user_id, product_id, data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

router.delete('/:id/category/:category_id', verify, function (req, res) {
    let data = req.body;
    let user_id = req.params.id;
    let category_id = req.params.product_id;
    service.deleteOne(user_id, category_id, data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

router.delete('/:id/proposals/:proposal_id', verify, function (req, res) {
    let data = req.body;
    let user_id = req.params.id;
    let proposal_id = req.params.proposal_id;
    service.deletAcceptance(user_id, proposal_id, data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});


module.exports = router;