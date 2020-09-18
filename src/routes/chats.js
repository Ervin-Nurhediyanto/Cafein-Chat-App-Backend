const express = require('express')
const chatController = require('../controllers/chats')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')

router
  .get('/:id', verifyAccess, chatController.getChatById)
  .get('/', verifyAccess, chatController.getAllchat)
  .post('/', verifyAccess, chatController.insertChat)
  .patch('/:id', verifyAccess, chatController.updateChat)
  .delete('/:id', verifyAccess, chatController.deleteChat)

module.exports = router
