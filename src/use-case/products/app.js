const DataSanitize = require('../../entities/products/app')
const query = require('../../data-access/connection/products/app')
const insertProducts = require('./addProducts')

const insertProduct = insertProducts({DataSanitize,query})

const services = Object.freeze({
    insertProduct
})

 module.exports = services
 module.exports = insertProduct