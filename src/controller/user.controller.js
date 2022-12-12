const userService = require('../services/user.service')

const getUsers = () =>
    async (req, res) => {
        try {
            const data = await userService.getUsers()
            res.status(200).json({ data })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

const getUserDetail = () =>
    async (req, res) => {
        try {
            const { id } = req.params
            const data = await userService.getUserDetail(id)
            res.status(200).json({ data })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

module.exports = {
    getUsers,
    getUserDetail
}