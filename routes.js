'use strict'

module.exports = (app) => {
  const myJson = require('./controller')

  app.route('/')
    .get(myJson.index)

  app.route('/mahasiswa')
    .get(myJson.mahasiswa)
    .post(myJson.inputMahasiswa)

  app.route('/mahasiswa/:nim')
    .get(myJson.selectedMahasiswa)
}
