const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 3000
const routes = require('./route/route')

app.use(express.json())

app.use('/', routes)

app.listen(port, () => {
    console.log(`live and well at port ${port}`)
})