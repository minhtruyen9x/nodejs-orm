const express = require('express')
const restaurantController = require('../../controller/restaurant.controller')

const restaurantRouter = express.Router()

// lấy danh sách người dùng (bao hàm luôn số lượt like, nhưng không 
// lấy chi tiết các thông tin như user nào đã like, chỉ có id user)
restaurantRouter.get("/", restaurantController.getRestaurants())

// lấy chi tiết người dùng  (bao hàm luôn số lượt like và user đã like)
restaurantRouter.get("/:id", restaurantController.getRestaurantDetail())

module.exports = restaurantRouter


