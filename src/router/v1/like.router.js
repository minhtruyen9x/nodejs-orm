const express = require('express')
const likeController = require('../../controller/like.controller')

const likeRouter = express.Router()

// lấy danh sách tất cả lượt like (cùng cả thông tin của user đã like và restaurant được like)
likeRouter.get("/", likeController.getLikes())

// tạo lượt like
likeRouter.post("/", likeController.createLike())

// Xóa Lượt like
likeRouter.delete("/:id", likeController.deleteLike())

module.exports = likeRouter


