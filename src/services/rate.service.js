const { Restaurant, User, RateRestaurant } = require('../models')

const rateService = {
    getRates: async () => {
        try {
            try {
                const data = await RateRestaurant.findAll({
                    include: ['user', 'restaurant'],
                })

                return data
            } catch (error) {
                throw error
            }
        } catch (error) {
            throw error
        }
    },
    createRate: async (data) => {
        try {
            const { userId, resId, amount } = data

            const user = await User.findByPk(userId)
            if (!user) {
                throw "User Not Found"
            }

            const restaurant = await Restaurant.findByPk(resId)
            if (!restaurant) {
                throw "Restaurant Not Found"
            }

            const isRated = await restaurant.hasRatedUser(user.id)
            console.log(restaurant.__proto__)

            if (isRated) {
                throw "User has rated this restaurant"
            }
            else {
                await restaurant.addRatedUser(user.id, { through: { amount } })
            }

            return 'OK'
        } catch (error) {
            throw error
        }
    }
}

module.exports = rateService