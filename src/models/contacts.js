const connection = require('../configs/db')

const contacts = {
  getContactById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM contacts WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllContact: (idUser, idFriend) => {
    let checkContact = ''

    if (idUser) {
      if (idFriend) {
        checkContact = `WHERE (idUser=${idUser} OR idUser=${idFriend}) AND (idFriend=${idUser} OR idFriend=${idFriend})`
        // checkContact = `WHERE idUser=${idUser} AND idFriend=${idFriend}`
      } else {
        checkContact = `WHERE idUser=${idUser}`
      }
    }

    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM users INNER JOIN contacts ON users.id = contacts.idFriend ${checkContact}`, (err, result) => {
        if (!err) {
          if (result == '') {
            checkContact = `WHERE idFriend=${idUser}`
            connection.query(`SELECT * FROM users INNER JOIN contacts ON users.id = contacts.idUser ${checkContact}`, (err, result) => {
              if (!err) {
                resolve(result)
              }
            })
          } else {
            resolve(result)
          }
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateContact: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE contacts SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve('Update Data Success')
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteContact: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM contacts WHERE id = ?', id, (err, result) => {
        if (!err) {
          if (result != '') {
            connection.query('DELETE FROM contacts WHERE id = ?', id, (err, result) => {
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
  insertContact: (data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO contacts SET ?', data, (err, result) => {
        if (!err) {
          resolve('Add Friend success')
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = contacts
