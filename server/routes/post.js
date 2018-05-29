const express = require('express')
const router = express.Router()

const PostController = require('../controllers/PostController')

router.get('/', PostController.list)
router.get('/:id', PostController.get)
router.post('/', PostController.create)

module.exports = router
