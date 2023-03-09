const { User } = require('../models/index')
const { hashPass, comparePass } = require('../middleware/password.middleware')
const { returnFormat } = require('../middleware/common.middleware')
const moment = require('moment')

async function register(req, res, next) {

    const payload = {
        username: req.body.username,
        password: hashPass(req.body.password),
        fullname: req.body.fullname,
        dob: moment(req.body.dob, "DD/MM/YYY").format('YYYY/MM/DD'),
        address: req.body.address,
        phone_number: req.body.phone_number
    }

    try {
        await User.create(payload)

        returnFormat.data = ''
        returnFormat.status = 200
        res.json(returnFormat)

    } catch (e) {
        returnFormat.data = ''
        returnFormat.status = 500
        res.json(returnFormat)
    }

}

module.exports = {
    register

}