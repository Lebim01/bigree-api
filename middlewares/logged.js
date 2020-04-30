const jwt = require('jsonwebtoken')
const tokenMiddleware = require('./token')

module.exports = [
    tokenMiddleware,
    (req, res, next) => {
        
    }
]