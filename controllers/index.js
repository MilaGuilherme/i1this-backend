
const userService = require('../services/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const express = require('express');
const router = express.Router();

router.post('/signin', (req, res) => {
    const data = req.body
    if (data.email) {
        userService.signin(data.email).then((response) => {
            const result = response.content[0].dataValues
            const id = result.id
            const pass = result.password
            const UserTypeId = result.UserTypeId
            bcrypt.compare(data.password || 'none', pass).then((validPass) => {
                if (validPass) {
                    const token = jwt.sign({ user: id, type: UserTypeId}, process.env.TOKEN_KEY)
                    res.set('auth-token', token).status(200).send("Logged in")
                }
                else res.status(403).send('Incorrect password')
            })
        })
    }
    else res.status(403).send('Missing email')
})

router.post('/signup', (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    }
    try {
        userService.signup(data).then(response => res.status(response.status).send(response))
    }
    catch (err) {
        res.status(response.status).send(response)
    }
})

module.exports = router;