const { Restaurant, User, RateRestaurant } = require('../models')

const rateService = {
    getRates: async () => {
        try {
            const data = await RateRestaurant.findAll({
                include: [
                    {
                        model: User,
                        as: "user"
                    },
                    {
                        model: Restaurant,
                        as: "restaurant"
                    }
                ]
            })

            return data
        } catch (error) {
            throw error
        }
    },
    createRate: async (data) => {
        try {
            const { userId, resId, amount } = data

            const isRated = await RateRestaurant.findOne({
                where: {
                    userId,
                    resId
                }
            })

            if (isRated) {
                throw new Error("User has already rated this restaurant")
            }
            const createdRate = await RateRestaurant.create({ userId, resId, amount })

            return createdRate
        } catch (error) {
            throw error
        }
    }
}

module.exports = rateService