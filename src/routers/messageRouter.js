const express = require('express')
const MessageController = require('../controllers/messageController')

const router = express.Router()

router.get("/",MessageController.getAllMessages)

router.post("/", MessageController.postMessage)

module.exports = router

