const express = require('express')
const addressController = require('../controllers/address')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')

router
  .get('/:id', verifyAccess, addressController.getAddressById)
  .get('/', verifyAccess, addressController.getAllAddress)
  .post('/', verifyAccess, upload, addressController.insertAddress)
  .patch('/:id', verifyAccess, upload, addressController.updateAddress)
  .delete('/:id', verifyAccess, addressController.deleteAddress)
  
module.exports = router
