module.exports = async (req, res, next) => {
    const header = req.get('Authorization')
    if (!header) {
        req.isAuth = false
        return next()
    }
    const token = header.split(' ')[1]
    if (!token) {
        req.isAuth = false
        return next()
    }
    
    req.token = token
    next()
}