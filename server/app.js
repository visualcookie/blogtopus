const express = require('express')
const knex = require('knex')
const knexConfig = require('./knexfile')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const passport = require('passport')
const cors = require('cors')
const { Model } = require('objection')

const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')

const initKnex = knex(knexConfig.development)
Model.knex(initKnex)

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

require('./passport')(passport)

app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/post', postRouter)

module.exports = app
