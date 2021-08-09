const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const service = require('../services/proposals')
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
    service.get({"id":id}).then((response) => {
        res.status(response.status).send(response)
    })
});

router.get('/:id/users', function (req, res) {
    let id = req.params.id
    service.getProposalAcceptees({"id":id}).then((response) => {
        res.status(response.status).send(response)
    })
});

/*
 * POST ROUTES
 */
router.post('/',verify, function (req, res) {
    let data = req.body;
    let auth = jwt.decode(req.headers["auth-token"])
    data.UserId = auth.user
        service.post(data,auth)
        .then((response) => {
            res.status(response.status).send(response)
        })
});


/*
 * PUT ROUTES
*/

router.put('/:id',verify, function (req, res) {
    let data = req.body;
    data.id = req.params.id
    let auth = jwt.decode(req.headers["auth-token"])
        service.update(data,auth)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

module.exports = router;