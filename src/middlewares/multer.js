const multer = require('multer')
const path = require('path')
const helpers = require('../helpers/helpers')

const storage = multer.diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

function upload (req, res, next) {
  const uploadFiles = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
      const extFile = path.extname(file.originalname)
      if (extFile !== '.jpg') {
        cb('jpg Only!', false)
      } else {
        cb(null, true)
      }
    }
  }).array('image', 2)

  uploadFiles(req, res, function (err) {
    if (err) {
      if (err == 'jpg Only!') {
        return helpers.response(res, null, 'jpg Only!', 202, 'processing has not been completed')
      } else {
        return helpers.response(res, null, 'File too large', 202, 'processing has not been completed')
      }
    } else {
      next()
    }
  })
}

module.exports = {
  upload
}
