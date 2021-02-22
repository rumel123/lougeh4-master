
const fetchDelivery = ({query}) => {
    return async function select(info) {
        let data = []
        let {id} = info
        if(id)
        {
             data = {status:"with id", id:id}
        }
        else
        {
            data = {status:"without id",id:id}
        }

        return data
    }
}

module.exports = fetchDelivery