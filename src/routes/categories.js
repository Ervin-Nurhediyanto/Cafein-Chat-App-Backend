const express = require('express')
const categoryController = require('../controllers/categories')
const router = express.Router()
const { verifyAccess, verifyAccessSeller } = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')
// const redis = require('../middlewares/redis')

router
  .get('/:id', verifyAccess, categoryController.getCategoryById)
  .get('/', verifyAccess, categoryController.getAllcategory)
  .post('/', verifyAccessSeller, upload, categoryController.insertCategory)
  .patch('/:id', verifyAccessSeller, upload, categoryController.updateCategory)
  .delete('/:id', verifyAccessSeller, categoryController.deleteCategory)
  
module.exports = router
