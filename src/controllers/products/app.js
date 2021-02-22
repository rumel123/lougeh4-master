const insertProduct = require('../../use-case/products/app')

const createDatas = require('./createController') 
//attched here the usecases and manipulate the data from the function
const createData = createDatas({insertProduct}) 

const services = Object.freeze({
createData 
})

module.exports = services
module.exports = createData
