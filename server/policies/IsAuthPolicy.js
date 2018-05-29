const passport = require('passport')

module.exports = (req, res, next) => {
  passport.authenticate('jwt', () => {
    res.send(200).end('Authorized')
  })
}
