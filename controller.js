'use strict'

const response = require('./res'),
  connection = require('./koneksi')

exports.index = (req, res) => {
  response.ok('Aplikasi REST API Berjalan', res)
}

// menampilkan data mhs
exports.mahasiswa = (req, res) => {
  connection.query('SELECT * FROM mahasiswa', (error, rows, fields) => {
    if (error) connection.log(error)
    response.ok(rows, res)
  })
}
