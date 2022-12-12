const restaurantService = require('../services/restaurant.service')

const getRestaurants = () =>
    async (req, res) => {
        try {
            const data = await restaurantService.getRestaurants()
            res.status(200).json({ data })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

const getRestaurantDetail = () =>
    async (req, res) => {
        try {
            const { id } = req.params
            const data = await restaurantService.getRestaurantDetail(id)
            res.status(200).json({ data })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

module.exports = {
    getRestaurants,
    getRestaurantDetail
}