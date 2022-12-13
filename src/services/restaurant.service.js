const { RateRestaurant, Restaurant, User, LikeRestaurant } = require('../models')

const restaurantService = {
    getRestaurants: async () => {
        try {
            const data = await Restaurant.findAll({
                include: [{
                    model: LikeRestaurant,
                    as: "likes"
                }, {
                    model: RateRestaurant,
                    as: "rates"
                }]
            })

            return data
        } catch (error) {
            throw error
        }
    },
    getRestaurantDetail: async (id) => {
        try {
            const data = await Restaurant.findOne({
                where: {
                    id
                },
                include: [
                    {
                        model: LikeRestaurant,
                        as: "likes",
                        include: {
                            model: User,
                            as: "user"
                        }
                    },
                    {
                        model: RateRestaurant,
                        as: "rates",
                        include: {
                            model: User,
                            as: "user"
                        }
                    }
                ]
            })

            return data
        } catch (error) {
            throw error
        }
    }
}

module.exports = restaurantService