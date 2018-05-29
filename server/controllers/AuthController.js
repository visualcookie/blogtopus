const jwt = require('jsonwebtoken')
const config = require('../config')
const User = require('../models/User')

module.exports = {
  async signup (req, res) {
    const data = req.body

    try {
      await User.query().insert(data)
      res.sendStatus(200)
    } catch (error) {
      console.log(error)
      res.status(error.statusCode || 500).json({ error: error.data || 'Unexpected Server Error' })
    }
  },
  async signin (req, res) {
    const {email, password} = req.body

    try {
      const user = await User.query().findOne({ email: email })

      if (!user) {
        return res.status(401).json({ error: `A user with that email doesn't exist.` })
      }

      const isPasswordValid = await user.verifyPassword(password)
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Wrong password.' })
      }

      const token = jwt.sign(user.toJSON(), config.jwt.secret, { expiresIn: config.jwt.expiration })
      res.status(200).json({ token })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Unexpected Server Error' })
    }
  }
}
