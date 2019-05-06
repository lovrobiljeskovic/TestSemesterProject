const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require("cors")
const routes = require('./routes/api')

app.use(cors())

app.use(bodyParser.json())

app.use('/api', routes)

app.listen(8000, () => {
  console.log('Listening on port 8000!')
})