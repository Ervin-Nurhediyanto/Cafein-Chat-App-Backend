const express = require('express')
const historyController = require('../controllers/histories')
const router = express.Router()
const { verifyAccess, verifyAccessSeller } = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')
// const redis = require('../middlewares/redis')

router
  .get('/:id', verifyAccess, historyController.getHistoryById)
  .get('/', verifyAccess, historyController.getAllhistory)
  .post('/', verifyAccessSeller, upload, historyController.insertHistory)
  .patch('/:id', verifyAccessSeller, upload, historyController.updateHistory)
  .delete('/:id', verifyAccessSeller, historyController.deleteHistory)
  
module.exports = router
