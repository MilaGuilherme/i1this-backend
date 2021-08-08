const express = require('express')
const jwt = require('jsonwebtoken')
const service = require('../services/userTypes')
const verify = require('../helpers/authHelper')
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

router.get('/:id/users', function (req, res) {
    let id = req.params.id
    service.getTypeUsers({ "id": id }).then((response) => {
        res.status(response.status).send(response)
    })
});


/*
 * POST ROUTES
 */
router.post('/', verify, function (req, res) {
    let data = req.body;
    let auth = jwt.decode(req.headers["auth-token"])
    service.post(data, auth)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

/*
 * PUT ROUTES
*/

router.put('/:id', verify, function (req, res) {
    let data = req.body;
    data.id = req.params.id;
    let auth = jwt.decode(req.headers["auth-token"])
    service.update(data, auth)
        .then((response) => {
            res.status(response.status).send(response)
        })
});

/*
 * DELETE ROUTES
 */



module.exports = router;