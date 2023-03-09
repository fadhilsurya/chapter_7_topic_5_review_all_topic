const router = require('express').Router()
const userRouter = require('./user/user.route')

router.use('/user', userRouter)


module.exports = router