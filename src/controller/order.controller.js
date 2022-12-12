const orderService = require('../services/order.service')


const createOrder = () =>
    async (req, res) => {
        try {
            const data = req.body
            const createdOrder = await orderService.createOrder(data)

            res.status(200).json({ data: createdOrder })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

module.exports = {
    createOrder
}