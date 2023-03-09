const bcrypt = require('bcrypt')

function hashPass(pass) {
    const salt = bcrypt.genSaltSync(parseInt(process.env.SALT));
    const hash = bcrypt.hashSync(pass, salt);

    return hash
}

function comparePass(currentPass, storeHash) {
    return bcrypt.compareSync(currentPass, storeHash)
}

module.exports = {
    hashPass,
    comparePass
}