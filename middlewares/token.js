module.exports = (req, res, next) => {
    const header = req.get('Authorization')
    if (!header) {
        return res.sendStatus(401)
    }
    const token = header.split(' ')[1]
    if (!token) {
        return res.sendStatus(401)
    }

    req.token = token

    next()
}