const express = require('express');
const service = require('../../services/userTypes')
const router = express.Router();
const verify = require('../../helpers/authHelper');


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
    service.getTypeUsers(id).then((response) => {
        res.status(response.status).send(response)
    })
});


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


module.exports = router;