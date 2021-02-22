const createData = require('../../controllers/products/app')

const route = ({router,makeExpressCallback}) => {
    //insert Deliveries
   
    router.post('/products/add/',makeExpressCallback(createData))

    return router
}
module.exports = route