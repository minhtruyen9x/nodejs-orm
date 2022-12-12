const express = require('express')
const rateController = require('../../controller/rate.controller')

const rateRouter = express.Router()

// lấy danh sách tất cả lượt rate (cùng cả thông tin của user đã rate và restaurant được rate)
rateRouter.get("/", rateController.getRates())

// tạo lượt rate
rateRouter.post("/", rateController.createRate())


module.exports = rateRouter


