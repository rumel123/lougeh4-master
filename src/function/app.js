const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

//preparation
const encrypts = require('./encrypt')

const decrypts = require('./decrypt')

const token = require('./token')

//attaching imports
const tokens = token({})

const encrypt = encrypts({jwt,dotenv,tokens})


const decrypt = decrypts({jwt,dotenv})

 
const services = Object.freeze({
    decrypt,encrypt,tokens
})
 
module.exports = services
module.exports = {encrypt,decrypt,tokens}