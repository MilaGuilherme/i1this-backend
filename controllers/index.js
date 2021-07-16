
const userService = require('../services/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const express = require('express');
const router = express.Router();

//TODO ARRUMAR ISSO

router.post('/login', (req, res) => {
    const data = req.body
    userService.getByEmail(data.email).then((result) => {
        const id = result.content[0].id
        const pass = result.content[0].password
        const type = result.content[0].type_id
        bcrypt.compare(data.password || 'none', pass).then((validPass) => {
            if (validPass) {
                const token = jwt.sign({ agent_id: id, type_id: type}, process.env.TOKEN_KEY)
                res.header('auth-token', token)
                res.send('Logado')
            }
            else res.send('Dados incorretos')
        })
    })
})

/*router.get('/signup', (req, res) => {
    res.send('get');
})*/

module.exports = router;