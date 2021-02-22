const fetchOneItem = ({findDataBC,query}) => {
    return async function post(info) {
        const datas = await findDataBC(info)
        const data = {
            delivery_code:datas.Dc()
        }
        return data
    }
}

module.exports = fetchOneItem