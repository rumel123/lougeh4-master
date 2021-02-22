const deliveryQuery = ({ connections, models }) => {
    return Object.freeze({
        insertDeliveries,
        validateDeliveryCode,
        fetchDeliveries,
           fetchAllDeliveries,
         /*    fetchDeliveriesWithProducts,*/
    })
    //insert Deliveries
    async function insertDeliveries({ info }) {
        try {
            const Delivery = models.delivery
            const { suppliername, delivery_received_date, delivery_code } = info
            const result = await Delivery.create({
                suppliername: suppliername,
                delivery_received_date: delivery_received_date,
                delivery_code: delivery_code
            })
            return result
        } catch (error) {
            console.log(error.message)
        }
    }
    //fetch Delivery to display in tables
    async function fetchAllDeliveries() {
        try {
            const Delivery = models.delivery
            const data = []
            const res = await Delivery.findAll()
            for (let i = 0; i < res.length; i++) {
                const array = res[i];
                data.push({
                    delivery_id: array.dataValues.delivery_id,
                    suppliername: array.dataValues.suppliername,
                    delivery_received_date: array.dataValues.delivery_received_date,
                    delivery_code: array.dataValues.delivery_code
                })
            }
            return data
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
    }
    //fetch Supplier
    async function fetchDeliveries(id) {
        try {
            const Delivery = models.delivery
            const data = []
            const res = await Delivery.findAll({ where: { delivery_id: id } })
            for (let i = 0; i < res.length; i++) {
                const array = res[i];
                data.push({
                    delivery_id: array.dataValues.delivery_id,
                    suppliername: array.dataValues.suppliername,
                    delivery_received_date: array.dataValues.delivery_received_date,
                    delivery_code: array.dataValues.delivery_code
                })
            }
            return data
        } catch (error) {
            console.log(error.message)
        }
    }
    //delivery code validation
    async function validateDeliveryCode({ info }) {
        try {
            const Delivery = models.delivery
            const { delivery_code } = info
            const res = await Delivery.findAll({
                attributes: ['delivery_code'],
                where: { delivery_code: delivery_code }
            }) 
            return res
        } catch (error) {
            console.log(error.message)
        }
    }



};
module.exports = deliveryQuery