const rateService = require('../services/rate.service')


const createRate = () =>
    async (req, res) => {
        try {
            const data = req.body
            const createdRate = await rateService.createRate(data)

            res.status(200).json({ data: createdRate })
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }

const getRates = () =>
    async (req, res) => {
        try {
            const data = await rateService.getRates()
            // const ress = await data.getUsers()
            res.status(200).json({ data })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

module.exports = {
    createRate,
    getRates
}