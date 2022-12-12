const express = require('express')
const userController = require('../../controller/user.controller')

const userRouter = express.Router()

// lấy danh sách người dùng (bao hàm luôn số lượt like, nhưng không
// có chi tiết đã like nhà hàng nào chỉ có id nhà hàng)
userRouter.get("/", userController.getUsers())

// lấy chi tiết người dùng  (bao hàm luôn số lượt like và cả thông tin nhà hàng được like)
userRouter.get("/:id", userController.getUserDetail())

module.exports = userRouter


