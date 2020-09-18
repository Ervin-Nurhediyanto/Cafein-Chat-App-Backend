const chatModels = require('../models/chats')
const helpers = require('../helpers/helpers')

const chats = {
  getChatById: (req, res) => {
    const id = req.params.id
    chatModels.getChatById(id)
      .then((result) => {
        if (result != '') {
          helpers.response(res, null, result, 200, null)
        } else {
          helpers.response(res, null, 'Data not found', 404, 'Error')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getAllchat: (req, res) => {
    const search = req.query.search
    const sort = req.query.sort
    const order = req.query.order
    const page = req.query.page
    const limit = req.query.limit

    chatModels.getAllchat(search, sort, order, page, limit)
      .then((result) => {
        if (result != '') {
          helpers.response(res, page, result, 200, null)
        } else {
          helpers.response(res, null, 'Data not found', 404, 'Error')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateChat: (req, res) => {
    const id = req.params.id
    const { chat, idProduct, idUser } = req.body
    const data = {
      chat,
      idProduct,
      idUser
    }
    chatModels.updateChat(id, data)
      .then((result) => {
        const resultChats = result
        console.log(result)
        helpers.response(res, null, resultChats, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteChat: (req, res) => {
    const id = req.params.id
    chatModels.deleteChat(id)
      .then((result) => {
        if (result == 'ID Chat is already exsists') {
          helpers.response(res, null, result, 403, 'Forbidden')
        } else if (result == 'ID Chat not found') {
          helpers.response(res, null, result, 404, 'Not Found')
        } else {
          helpers.response(res, null, result, 200, null)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertChat: (req, res) => {
    const { chat, idProduct, idUser } = req.body
    const data = {
      chat,
      idProduct,
      idUser
    }
    chatModels.insertChat(data)
      .then((result) => {
        console.log(result)
        helpers.response(res, null, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = chats
