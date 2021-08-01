
const userService = require('../services/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const express = require('express');
const router = express.Router();

//TODO ARRUMAR ISSO

router.post('/signin', (req, res) => {
    const data = req.body
    userService.getByEmail(data.email).then((result) => {
        const id = result.content[0].id
        const pass = result.content[0].password
        const type = result.content[0].type_id
        bcrypt.compare(data.password || 'none', pass).then((validPass) => {
            if (validPass) {
                const token = jwt.sign({ agent_id: id, type_id: type }, process.env.TOKEN_KEY)
                res.set('auth-token', token).status(200).send("Logged in")
            }
            else res.status(403).send('Incorrect password')
        })
    })
})

router.post('/signup', (req, res) => {
    const data = req.body 
    try{
    userService.post(data).then(response=> res.status(response.status).send(response.message))
    }
    catch(err){
        res.send(err);
    }
})

module.exports = router;