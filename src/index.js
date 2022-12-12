const express = require('express')
const router = require('./router/v1')
const app = express()

app.use(express.json())


app.use('/api/v1/', router)


app.listen(4000)