const { 
    modelGetAllProducts, 
    modelGetDetailProducts, 
    modelInsertProducts, 
    modelUpdateProducts,
    modelDeleteProducts,
    modelGetHistories
} = require('../models/products')

module.exports = {
    getAllProducts: (req, res) => {
        const name     = req.query.name
        const sort     = req.query.sort
        const by       = req.query.by
        const limit    = 3
        const page     = req.query.page
        const offset   = page === 1 ? 0: (page-1)*limit

        modelGetAllProducts(name, sort, by, offset, limit)
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            console.log(err)
        }) 
    },


    getDetailProducts: (req, res) => {
        const id = req.params.id

        modelGetDetailProducts(id)
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            console.log(err)
        }) 
    },

    insertProducts: (req, res) => {
        const rareData = req.body
        const data = {
            name    : rareData.name,
            price   : rareData.price,
            image   : rareData.image,
            id_category: rareData.id_category
        }

        modelInsertProducts(data)
        .then((response) => {
            res.json({
                status: `Data has been accepted!`
            })
        })
        .catch((err) => {
            console.log(err)
        }) 
    },

    
    updateProducts: (req, res) => {
        const id        = req.params.id
        const rareData  = req.body
        const data      = {
            name    : rareData.name,
            price   : rareData.price,
            image   : rareData.image,
            id_category: rareData.id_category
        } 

        modelUpdateProducts(data, id)
        .then((response) => {
            res.json({
                status: `Data has been updated!`
            })
        })
        .catch((err) => {
            console.log(err)
        }) 
    },

    deleteProducts: (req, res) => {
        const id = req.params.id

        modelDeleteProducts(id)
        .then((response) => {
            res.json({
                status: `Data has been deleted!`
            })
        })
        .catch((err) => {
            console.log(err)
        }) 
    },

    getHistories: (req, res) => {

        modelGetHistories()
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
            console.log(err)
        }) 
    }
}