const likeService = require('../services/like.service')


const createLike = () =>
    async (req, res) => {
        try {
            const data = req.body
            const createdLike = await likeService.createLike(data)

            res.status(200).json({ data: createdLike })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

const deleteLike = () =>
    async (req, res) => {
        try {
            const { id } = req.params
            await likeService.deleteLike(id)
            res.status(200).json("OK!")
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

const getLikes = () =>
    async (req, res) => {
        try {
            const data = await likeService.getLikes()
            // const ress = await data.getUsers()
            res.status(200).json({ data })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

module.exports = {
    createLike,
    deleteLike,
    getLikes,
}