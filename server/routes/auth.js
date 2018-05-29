const express = require('express')
const passport = require('passport')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

router.get('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.status(200).end('Authorized')
})
router.post('/signin', AuthController.signin)
router.post('/signup', AuthController.signup)

module.exports = router
