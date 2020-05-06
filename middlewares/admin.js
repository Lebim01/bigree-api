module.exports = (req, res, next) => {
    req.isAdmin = false
    next()
}