
const express = require('express')
const productController = require('../controllers/products')
const router = express.Router()
const { verifyAccess, verifyAccessSeller } = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')

router
  .get('/:id', verifyAccess, productController.getProductById)
  .get('/', verifyAccess, productController.getAllproduct)
  .post('/', verifyAccessSeller, upload, productController.insertProduct)
  .patch('/:id', verifyAccessSeller, upload, productController.updateProduct)
  .delete('/:id', verifyAccessSeller, productController.deleteProduct)

module.exports = router