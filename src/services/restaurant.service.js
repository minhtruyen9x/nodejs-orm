const { Restaurant } = require('../models')

const restaurantService = {
    getRestaurants: async () => {
        try {
            const data = await Restaurant.findAll()

            return data
        } catch (error) {
            throw error
        }
    },

    getRestaurantLikes: async (resId) => {
        try {
            const restaurant = await Restaurant.findByPk(resId)
            if (!restaurant) {
                throw 'restaurant not found'
            }

            const data = await Restaurant.findOne({
                where: { id: resId },
                include: {
                    association: 'likedUsers',
                    through: {
                        attributes: [],
                    }
                },
            })

            return data
        } catch (error) {
            throw error
        }
    },

    getRestaurantRates: async (resId) => {
        try {
            const restaurant = await Restaurant.findByPk(resId)
            if (!restaurant) {
                throw 'restaurant not found'
            }

            const data = await Restaurant.findOne({
                where: { id: resId },
                include: {
                    association: 'ratedUsers',
                    through: {
                        attributes: ['amount'],
                    }
                },
            })

            return data
        } catch (error) {
            throw error
        }
    }
}

module.exports = restaurantService