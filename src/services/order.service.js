const { User, Food } = require('../models')

const orderService = {
    createOrder: async (data) => {
        try {
            const { userId, foodId } = data

            const user = await User.findByPk(userId)
            if (!user) {
                throw new Error("User Not Found")
            }

            const food = await Food.findByPk(foodId)
            if (!food) {
                throw new Error("food Not Found")
            }

            console.log(user.__proto__)
            user.addOrder(food.id, { through: data })
            return 'OK'
        } catch (error) {
            throw error
        }
    }
}

module.exports = orderService