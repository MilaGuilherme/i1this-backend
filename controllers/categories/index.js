const express = require('express');
const service = require('../../services/categories')
const router = express.Router();


/*
 * GET ROUTES
 */
router.get('/', function (req, res) {
    service.get().then((response) => {
        res.send(response);
    })
});

router.get('/:id', function (req, res) {
    let id = req.params.id
    service.getById(id).then((response) => {
        res.send(response);
    })
});

router.get('/:id/products', function (req, res) {
    let id = req.params.id
    service.getProducts(id).then((response) => {
        res.send(response);
    })
});

router.get('/:id/watchers', function (req, res) {
    let id = req.params.id
    service.getWatchers(id).then((response) => {
        res.send(response);
    })
})

router.get('/:id/parents', function (req, res) {
    let id = req.params.id
    service.getParents(id).then((response) => {
        res.send(response);
    })
})

router.get('/:id/children', function (req, res) {
    let id = req.params.id
    service.getChildren(id).then((response) => {
        res.send(response);
    })
})


/*
 * POST ROUTES
 */
router.post('/', function (req, res) {
    let data = req.body
    try {
        service.post(data)
            .then((response) => {
                console.log(response)
                res.send(response)
            })
    }
    catch (err) {
    }
});


/*
 * PATCH ROUTES
 */


/*
 * DELETE ROUTES
 */
router.delete('/:id', function (req, res) {
    write.removeCategory(req.params.id, 1).then((response) => {
        console.log
        res.send(response);
    })
});

module.exports = router;