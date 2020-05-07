const user = require('./user')
const auth = require('./auth')
const event = require('./event')
const category = require('./category')
const paymentmethod = require('./paymentmethod')

/**
    Will return object with resolver object
 */
module.exports = {
    ...user,
    ...auth,
    ...event,
    ...category,
    ...paymentmethod
}