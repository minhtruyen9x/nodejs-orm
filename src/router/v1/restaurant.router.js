const express = require('express')
const restaurantController = require('../../controller/restaurant.controller')

const restaurantRouter = express.Router()

restaurantRouter.get("/", restaurantController.getRestaurants())
restaurantRouter.get("/:resId/likes", restaurantController.getRestaurantLikes())
restaurantRouter.get("/:resId/rates", restaurantController.getRestaurantRates())

module.exports = restaurantRouter


