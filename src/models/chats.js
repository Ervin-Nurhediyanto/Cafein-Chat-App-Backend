const connection = require('../configs/db')

const chats = {
  getChatById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM chats WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getAllchat: (idContact, sort) => {
    let message = ''
    let sortMessage = ''

    if (idContact) {
      message = `WHERE chats.idContact=${idContact}`
    }

    if (sort) {
      sortMessage = `ORDER BY ${sort} DESC`
    }

    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM users INNER JOIN chats ON users.id = chats.idSender ${message} ${sortMessage}`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateChat: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE chats SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve('Edit message success')
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  deleteChat: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM chats WHERE id = ?', id, (err, result) => {
        if (!err) {
          if (result != '') {
            connection.query('DELETE FROM chats WHERE id = ?', id, (err, result) => {
              if (!err) {
                resolve('Delete message success')
              } else {
                reject(new Error(err))
              }
            })
          } else {
            resolve('Message not found')
          }
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  insertChat: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO chats SET ?', data, (err, result) => {
        if (!err) {
          resolve('send message success')
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = chats
