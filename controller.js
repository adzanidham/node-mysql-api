'use strict'

const response = require('./res'),
  connection = require('./koneksi')

exports.index = (req, res) => {
  response.ok('Aplikasi REST API Berjalan', res)
}
