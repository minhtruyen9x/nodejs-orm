const LikeRestaurant = require('../models/LikeRestaurant')
const User = require('../models/User')
const Restaurant = require('../models/Restaurant')

const likeService = {
    getLikes: async () => {
        try {
            const data = await LikeRestaurant.findAll({
                include: [User, Restaurant]
            })

            return data
        } catch (error) {
            throw error
        }
    },

    createLike: async (data) => {
        try {
            const { userId, resId } = data

            const isLiked = await LikeRestaurant.findOne({
                where: {
                    userId,
                    resId
                }
            })

            if (isLiked) {
                throw new Error("User has already like this restaurant")
            }
            const createdLike = await LikeRestaurant.create({ userId, resId })

            return createdLike
        } catch (error) {
            throw error
        }
    },

    deleteLike: async (id) => {
        try {
            const [userId, resId] = id.split("-")
            const isFound = await LikeRestaurant.findOne({
                where: {
                    userId,
                    resId
                }
            })
            console.log(id, userId, resId, isFound)
            if (!isFound) {
                throw new Error("Not found th record, may be deleted")
            }

            await LikeRestaurant.destroy({
                where: {
                    userId,
                    resId
                }
            })

            return "OK"
        } catch (error) {
            throw error
        }
    }
}

module.exports = likeService