const { User } = require('../models')

const userService = {
    getUsers: async () => {
        try {
            const data = await User.findAll()

            return data
        } catch (error) {
            throw error
        }
    },

    getUserLikes: async (userId) => {
        try {
            const user = await User.findByPk(userId)
            if (!user) {
                throw 'User not found'
            }
            const data = User.findOne({
                where: { id: userId },
                include: {
                    association: 'likedRestaurants',
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

    getUserRates: async (userId) => {
        try {
            const user = await User.findByPk(userId)
            if (!user) {
                throw 'User not found'
            }
            const data = User.findOne({
                where: { id: userId },
                include: {
                    association: 'ratedRestaurants',
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

module.exports = userService