const { Restaurant, User, LikeRestaurant } = require('../models')

const likeService = {
    getLikes: async () => {
        try {
            const data = await LikeRestaurant.findAll({
                include: ['user', 'restaurant'],
            })

            return data
        } catch (error) {
            throw error
        }
    },

    createLike: async (data) => {
        try {
            const { userId, resId } = data

            const user = await User.findByPk(userId)
            if (!user) {
                throw new Error("User Not Found")
            }

            const restaurant = await Restaurant.findByPk(resId)
            if (!restaurant) {
                throw new Error("Restaurant Not Found")
            }

            const isLiked = await restaurant.hasLikedUser(user.id)
            console.log(restaurant.__proto__)

            if (isLiked) {
                throw "User has like this restaurant"
            }
            else {
                await restaurant.addLikedUser(user.id)
            }

            return 'OK'
        } catch (error) {
            throw error
        }
    },

    deleteLike: async (id) => {
        try {
            const [userId, resId] = id.split("-")

            const user = await User.findByPk(userId)
            if (!user) {
                throw new Error("User Not Found")
            }

            const restaurant = await Restaurant.findByPk(resId)
            if (!restaurant) {
                throw new Error("Restaurant Not Found")
            }

            const isLiked = await restaurant.hasLikedUser(user.id)
            console.log(restaurant.__proto__)

            if (isLiked) {
                await restaurant.removeLikedUser(user.id)
            }
            else {
                throw "User haven't  like this restaurant Yet"
            }
            console.log(isLiked)

            return 'OK'
        } catch (error) {
            throw error
        }
    }
}

module.exports = likeService