const sanitize = require('sanitize-html')
const Post = require('../models/Post')

module.exports = {
  async list (req, res) {
    try {
      const post = await Post.query().orderBy('created_at', 'desc')

      if (!post) {
        return res.sendStatus(500)
      }

      res.status(200).json(post)
    } catch (error) {
      console.log(error)
      res.status(error.statusCode || 500).json({ error: error.data || 'Unexpected Server Error' })
    }
  },
  async get (req, res) {
    const { id } = req.params

    try {
      const post = await Post.query().findById(id)

      if (!post) {
        return res.sendStatus(500)
      }

      res.status(200).json(post)
    } catch (error) {
      console.log(error)
      res.status(error.statusCode || 500).json({ error: error.data || 'Unexpected Server Error' })
    }
  },
  async create (req, res) {
    const { title, body } = req.body
    const description = sanitize(body.substr(0, 240), {
      allowedTags: [],
      allowedAttributes: []
    })

    try {
      await Post.query().insert({ title, description, body })
      res.sendStatus(200)
    } catch (error) {
      console.log(error)
      res.status(error.statusCode || 500).json({ error: error.data || 'Unexpected Server Error' })
    }
  },
  async update (req, res) {},
  async delete (req, res) {}
}
