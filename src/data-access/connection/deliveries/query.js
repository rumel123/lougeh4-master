const deliveryQuery = ({ connections, models }) => {
    return Object.freeze({
      insertDeliveries,
      validateDeliveryCode,
     /*     fetchAllDeliveries,
        fetchDeliveriesWithProducts,
        fetchSupplier,*/
    })
    //insert Deliveries
    async function insertDeliveries({ info }) {
        try {
            const Delivery = models.delivery
            const {suppliername,delivery_received_date,delivery_code} = info
            const result = await Delivery.create({
                suppliername:suppliername,
                delivery_received_date:delivery_received_date,
                delivery_code:delivery_code}) 
            return result  
        } catch (error) {
            console.log(error.message)
        }
    }
    //fetch Delivery to display in tables
    async function fetchAllDeliveries() {
        try {
            const Delivery = models.delivery
        } catch (error) {
            console.log(error.message)
        }
    }
    //fetch Delivery with the products
    async function fetchDeliveriesWithProducts({ id }) {
        try {
            const Delivery = models.delivery
        } catch (error) {
            console.log(error.message)
        }
        //fetch Supplier
        async function fetchSupplier() {
            try {
                const Delivery = models.delivery
            } catch (error) {
                console.log(error.message)
            }
        }
    }
    //delivery code validation
    async function validateDeliveryCode({ info }) {
        try {
            const Delivery = models.delivery
            const {delivery_code} = info
            const res = await Delivery.findAll({
                attributes:['delivery_code'],
                where:{delivery_code:delivery_code}})  
                console.log(res)
            return res  
        } catch (error) {
            console.log(error.message)
        }
    }



};
module.exports = deliveryQuery