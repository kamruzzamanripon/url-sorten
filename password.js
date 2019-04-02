const crypto = require('crypto');

function getRandomSalt(){
    return crypto.randomBytes(8).toString('hex').slice(0,16);
}

function mix(password,salt){
    retrun crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512'),toString('hex');
}

function generate(password){
    return mix(password, getRandomSalt());
}

function validation(password, hash, salt){
    let newHash = mix(password, salt);
    return newHash === hash;
}

module.exports = {validation, generate}