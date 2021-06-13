const express = require('express');
const service = require('../../services/proposals')
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

router.get('/:id/users', function (req, res) {
    let id = req.params.id
    service.getProposalAcceptees(id).then((response) => {
        res.status(response.status).send(response)
    })
});

/*
 * POST ROUTES
 */
router.post('/', function (req, res) {
    let data = req.body;
    service.post(data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});


/*
 * PUT ROUTES
*/

router.put('/:id', function (req, res) {
    let data = req.body;
    service.update(req.params.id,data)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

module.exports = router;