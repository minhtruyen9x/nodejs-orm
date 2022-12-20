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

const getRestaurantLikes = () =>
    async (req, res) => {
        try {
            const { resId } = req.params
            const data = await restaurantService.getRestaurantLikes(resId)
            res.status(200).json({ data })
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }

const getRestaurantRates = () =>
    async (req, res) => {
        try {
            const { resId } = req.params
            const data = await restaurantService.getRestaurantRates(resId)
            res.status(200).json({ data })
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }

module.exports = {
    getRestaurants,
    getRestaurantLikes,
    getRestaurantRates
}