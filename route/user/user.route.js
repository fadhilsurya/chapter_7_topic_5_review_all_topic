const router = require('express').Router()
const { register } = require('../../controller/user.controller')

router.post('/register', register)

module.exports = router