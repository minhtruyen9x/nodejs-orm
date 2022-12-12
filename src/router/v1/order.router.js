const express = require('express')
const orderController = require('../../controller/order.controller')

const orderRouter = express.Router()

// tạo order
orderRouter.post("/", orderController.createOrder())


module.exports = orderRouter


