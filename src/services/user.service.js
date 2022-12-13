const { RateRestaurant, Restaurant, User, LikeRestaurant } = require('../models')

const userService = {
    getUsers: async () => {
        try {
            const data = await User.findAll({
                include: [
                    {
                        model: LikeRestaurant,
                        as: "likes",
                    },
                    {
                        model: RateRestaurant,
                        as: "rates",
                    },
                ]
            })

            return data
        } catch (error) {
            throw error
        }
    },
    getUserDetail: async (id) => {
        try {
            const data = await User.findOne({
                where: {
                    id
                },
                include: [
                    {
                        model: LikeRestaurant,
                        as: "likes",
                        include: {
                            model: Restaurant,
                            as: "restaurant"
                        },
                    },
                    {
                        model: RateRestaurant,
                        as: "rates",
                        include: {
                            model: Restaurant,
                            as: "restaurant"
                        },
                    }
                ]
            })

            return data
        } catch (error) {
            throw error
        }
    }
}

module.exports = userService