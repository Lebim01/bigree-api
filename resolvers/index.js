const user = require('./user')
const auth = require('./auth')
const event = require('./event')

/**
    Will return object with resolver object
 */
module.exports = {
    ...user,
    ...auth,
    ...event
}