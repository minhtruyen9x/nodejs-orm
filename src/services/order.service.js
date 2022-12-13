const { Order } = require('../models')

const orderService = {
    createOrder: async (data) => {
        try {
            const { userId, foodId, amount, code, arrSubId } = data

            const createdOrder = await Order.create({ userId, foodId, amount, code, arrSubId })

            return createdOrder
        } catch (error) {
            throw error
        }
    }
}

module.exports = orderService