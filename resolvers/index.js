const user = require('./user')
const auth = require('./auth')

module.exports = {
    ...user.resolvers,
    ...auth.resolvers
}