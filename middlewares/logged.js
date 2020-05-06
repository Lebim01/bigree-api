const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    if (!req.token) {
        req.isAuth = false
        return next()
    }

    req.isAuth = true
    next()
}