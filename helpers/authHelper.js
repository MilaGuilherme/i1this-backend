const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    const token = req.header('auth-token');
    if(!token){
        return res.status(403).send('Access Denied')
    }
    try{
        const verifiedUser = jwt.verify(token,process.env.TOKEN_KEY)
        req.user = verifiedUser;
        next();
    }
    catch(err){
        return res.status(400).send('Invalid token')
    }
}