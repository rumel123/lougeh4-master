const {valMakeDeliveries,findDataBC} = require('../../entities/deliveries/app')
const query = require('../../data-access/connection/deliveries/app')

const addDelivery = require('./addDelivery')
const fetchDelivery = require('./fetchAllDeliveries')
const fetchOneItem = require('./fetchOneQuery')

const addDeliver = addDelivery({valMakeDeliveries,query})
const fetchDeliver = fetchDelivery({query})
const fetchOneItems = fetchOneItem({findDataBC,query})

const services = Object.freeze({
    addDeliver,fetchDeliver,fetchOneItems
})

module.exports = services
module.exports = {addDeliver,fetchDeliver,fetchOneItems}