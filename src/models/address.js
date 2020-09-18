const connection = require('../configs/db')

const address = {
  getAddressById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users INNER JOIN address ON address.idUser = users.id WHERE address.id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllAddress: (search, sort, order, page, limit) => {
    let searchAddress = ''
    let sortAddress = ''
    let pageAddress = ''

    if (search != null) {
      searchAddress = `WHERE address.address LIKE '%${search}%'`
    }
    if (sort != null) {
      if (order != null) {
        sortAddress = `ORDER BY ${sort} ${order}`
      } else {
        sortAddress = `ORDER BY ${sort} ASC`
      }
    }
    if (page != null) {
      if (limit != null) {
        pageAddress = `LIMIT ${limit} OFFSET ${(page - 1) * limit}`
      } else {
        pageAddress = `LIMIT 6 OFFSET ${(page - 1) * 6}`
      }
    }
    return new Promise((resolve, reject) => {
      if (search != null || sort != null || page != null) {
        connection.query(`SELECT * FROM users INNER JOIN address ON address.idUser = users.id ${searchAddress} ${sortAddress} ${pageAddress}`, (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      } else {
        connection.query('SELECT * FROM users INNER JOIN address ON address.idUser = users.id', (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      }
    })
  },
  updateAddress: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE address SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve('Update Address Success')
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  deleteAddress: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM address WHERE id = ?', id, (err, result) => {
        if (!err) {
          if (result != '') {
            connection.query('DELETE FROM address WHERE id = ?', id, (err, result) => {
              if (!err) {
                resolve('Delete Address Success')
              } else {
                reject(new Error(err))
              }
            })
          } else {
            resolve('Data Not Found')
          }
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  insertAddress: (data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO address SET ?', data, (err, result) => {
        if (!err) {
          resolve('Add Address Success')
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = address
