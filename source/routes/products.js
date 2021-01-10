const express = require('express');
const route = express.Router()
const { 
    getAllProducts, 
    getDetailProducts, 
    insertProducts, 
    updateProducts,
    deleteProducts,
    getHistories
} = require('../controllers/products')

route
.get('/products', getAllProducts)
.get('/product/:id', getDetailProducts)
.post('/products', insertProducts)
.put('/products/:id', updateProducts)
.delete('/products/:id', deleteProducts)
.get('/histories', getHistories)

module.exports = route