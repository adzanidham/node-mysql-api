'use strict'

const response = require('./res'),
  connection = require('./koneksi')

exports.index = (req, res) => {
  response.ok('Aplikasi REST API Berjalan', res)
}

// menampilkan data mhs
exports.mahasiswa = (req, res) => {
  connection.query('SELECT * FROM mahasiswa', (error, rows, fields) => {
    if (error) console.log(error)
    response.ok(rows, res)
  })
}

exports.selectedMahasiswa = (req, res) => {
  let nim = req.params.nim
  connection.query('SELECT * FROM mahasiswa WHERE nim = ?', [nim], (error, rows, fields) => {
    if (error) console.log(error)
    response.ok(rows, res)
  })
}

exports.inputMahasiswa = (req, res) => {
  let nim = req.body.nim
  let nama = req.body.nama
  let jurusan = req.body.jurusan

  connection.query('INSERT INTO mahasiswa values (?, ?, ?)', [nim, nama, jurusan], (error, rows, fields) => {
    if (error) console.log(error)
    response.ok('Berhasi menambahkan data mahasiswa', res)
  })
}
