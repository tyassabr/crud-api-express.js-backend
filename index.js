const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

const route = require('./source/routes/products')
app.use(route)


app.listen (8000, () => {
  console.log(`Service running on PORT 8000`)
})











