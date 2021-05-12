const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * @param {String} yourPassword
 * @returns {String} Hash || Error
 */
 function hashPass(yourPassword){
    bcrypt.hash(yourPassword, saltRounds, (err, hash) => {
        if(hash){
            console.log(hash)
            return hash;
        }
        if(err){
            return err;
        }
    });
}

/**
 * @param {String} inputedPass
 * @param {String} comparedPass
 * @returns {boolean} true || false
 */
 function comparePass(inputedPass,comparedPass){
    bcrypt.compare(inputedPass, comparedPass, (err, hash) => {
        if(hash){
            return true;
        }
        else{
            return false;
        }
    });
}


module.exports = {hashPass,comparePass};