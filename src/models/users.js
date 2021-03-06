const connection = require('../configs/db')

module.exports = {
  login: (email) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users WHERE email = ?', email, (err, result) => {
        if (!err) {
          connection.query('UPDATE users SET status = "online" WHERE email = ?', email, (err, result) => {
            if (!err) {
              connection.query('SELECT * FROM users WHERE email = ?', email, (err, result) => {
                if (!err) {
                  resolve(result)
                } else {
                  reject(new Error(err))
                }
              })
              // resolve(result)
            } else {
              reject(new Error(err))
            }
          })
          // resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  register: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users WHERE email = ?', data.email, (err, result) => {
        if (!err) {
          if (result != '') {
            resolve('Email is already exists')
          } else {
            connection.query('INSERT IGNORE INTO users SET ?', data, (err, result) => {
              if (!err) {
                resolve(result)
              } else {
                reject(new Error(err))
              }
            })
          }
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  resetPassword: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE users SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve('Reset Password Success')
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getUserById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getAllUser: (search) => {
    return new Promise((resolve, reject) => {
      let searchUser = ''

      if (search) {
        searchUser = `WHERE name LIKE '%${search}%'`
      }

      connection.query(`SELECT *, TIME_FORMAT(timeOnline, "%H %i") AS "time" FROM users ${searchUser}`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateUser: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE users SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve('Update Success')
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateImage: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE users SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve('Upload Image Success')
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  logout: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE users SET status = "offline" WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve('Logout Success')
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
