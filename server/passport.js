const { Strategy, ExtractJwt } = require('passport-jwt')
const config = require('./config')
const User = require('./models/User')

module.exports = passport => {
  const opts = {}

  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
  opts.secretOrKey = config.jwt.secret

  passport.use(
    new Strategy(opts, async (payload, done) => {
      try {
        const user = await User.query().findById(payload.id)
        return done(null, user)
      } catch (error) {
        done(error, false)
      }

      return done(null, false)
    })
  )
}
