const connection = require('../configs/db')

const chats = {
  getChatById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users INNER JOIN products ON products.idSeller = users.id INNER JOIN chat ON chat.idProduct = products.id WHERE chat.id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllchat: (search, sort, order, page, limit) => {
    let searchChat = ''
    let sortChat = ''
    let pageChat = ''

    if (search != null) {
      searchChat = `WHERE chat.chat LIKE '%${search}%'`
    }
    if (sort != null) {
      if (order != null) {
        sortChat = `ORDER BY ${sort} ${order}`
      } else {
        sortChat = `ORDER BY ${sort} ASC`
      }
    }
    if (page != null) {
      if (limit != null) {
        pageChat = `LIMIT ${limit} OFFSET ${(page - 1) * limit}`
      } else {
        pageChat = `LIMIT 6 OFFSET ${(page - 1) * 6}`
      }
    }
    return new Promise((resolve, reject) => {
      if (search != null || sort != null || page != null) {
        connection.query(`SELECT * FROM users INNER JOIN products ON products.idSeller = users.id INNER JOIN chat ON chat.idProduct = products.id ${searchChat} ${sortChat} ${pageChat}`, (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      } else {
        connection.query('SELECT * FROM users INNER JOIN products ON products.idSeller = users.id INNER JOIN chat ON chat.idProduct = products.id', (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      }
    })
  },
  updateChat: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE chat SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve('Update Data Success')
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteChat: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM chat WHERE id = ?', id, (err, result) => {
        if (!err) {
          if (result != '') {
            connection.query('DELETE FROM chat WHERE id = ?', id, (err, result) => {
              if (!err) {
                resolve('Delete data success')
              } else {
                reject(new Error(err))
              }
            })
          } else {
            resolve('Data not found')
          }
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  insertChat: (data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO chat SET ?', data, (err, result) => {
        if (!err) {
          resolve('Add data success')
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = chats
