const addressModels = require('../models/address')
const helpers = require('../helpers/helpers')
const redis = require('redis')
// const client = redis.createClient(6379)

const address = {
  getAddressById: (req, res) => {
    const id = req.params.id
    addressModels.getAddressById(id)
      .then((result) => {
        if (result != '') {
          helpers.response(res, null, result, 200, null)
        } else {
          helpers.response(res, null, 'Address not found', 404, 'Error')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getAllAddress: (req, res) => {
    const search = req.query.search
    const sort = req.query.sort
    const order = req.query.order
    const page = req.query.page
    const limit = req.query.limit

    addressModels.getAllAddress(search, sort, order, page, limit)
      .then((result) => {
        if (result != '') {
          helpers.response(res, page, result, 200, null)
        } else {
          helpers.response(res, null, 'Address not found', 404, 'Error')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },

  updateAddress: (req, res) => {
    const id = req.params.id
    const { title, name, address, city, telephoneNumber, postalCode, idUser } = req.body
    const data = {
      title,
      name,
      address,
      city,
      telephoneNumber,
      postalCode,
      idUser
    }
    addressModels.updateAddress(id, data)
      .then((result) => {
        const resultAddress = result
        console.log(result)
        helpers.response(res, null, resultAddress, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  deleteAddress: (req, res) => {
    const id = req.params.id
    addressModels.deleteAddress(id)
      .then((result) => {
        if (result == 'ID Address is already exsists') {
          helpers.response(res, null, result, 403, 'Forbidden')
        } else if (result == 'ID Address not found') {
          helpers.response(res, null, result, 404, 'Not Found')
        } else {
          helpers.response(res, null, result, 200, null)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  
  insertAddress: (req, res) => {
    const { title, name, address, city, telephoneNumber, postalCode, idUser } = req.body
    const data = {
      title,
      name,
      address,
      city,
      telephoneNumber,
      postalCode,
      idUser
    }
    addressModels.insertAddress(data)
      .then((result) => {
        console.log(result)
        helpers.response(res, null, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = address
