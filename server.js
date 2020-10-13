const express = require('express'),
  bodyParser = require('body-parser'),
  app = express()

// parse application
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// panggil routes
const routes = require('./routes')
routes(app)

app.listen(3000, () => console.log('Server started on port 3000...'))
