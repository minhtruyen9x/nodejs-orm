const express = require('express')
const likeRouter = require('./like.router')
const rateRouter = require('./rate.router')
const orderRouter = require('./order.router')
const userRouter = require('./user.router')
const restaurantRouter = require('./restaurant.router')

const router = express.Router()


router.use('/likes', likeRouter)
router.use('/rates', rateRouter)
router.use('/orders', orderRouter)
router.use('/users', userRouter)
router.use('/restaurants', restaurantRouter)


module.exports = router

