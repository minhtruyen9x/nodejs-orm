const express = require('express')
const userController = require('../../controller/user.controller')

const userRouter = express.Router()


userRouter.get("/", userController.getUsers())
userRouter.get("/:userId/likes", userController.getUserLikes())
userRouter.get("/:userId/rates", userController.getUserRates())

module.exports = userRouter


