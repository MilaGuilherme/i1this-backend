
const userService = require('../services/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const express = require('express');
const router = express.Router();

router.post('/signin', (req, res) => {
    const data = req.body
    if (data.email) {
        userService.getByEmail(data.email).then((response) => {
            const result = response.content[0].dataValues
            const id = result.id
            const pass = result.password
            const typeId = result.typeId
            bcrypt.compare(data.password || 'none', pass).then((validPass) => {
                if (validPass) {
                    const token = jwt.sign({ agent_id: id, user_type: typeId}, process.env.TOKEN_KEY)
                    res.set('auth-token', token).status(200).send("Logged in")
                }
                else res.status(403).send('Incorrect password')
            })
        })
    }
    else res.status(403).send('Missing email')
})

router.post('/signup', (req, res) => {
    const data = req.body
    try {
        userService.post(data).then(response => res.status(response.status).send(response.message))
    }
    catch (err) {
        res.send(err);
    }
})

module.exports = router;