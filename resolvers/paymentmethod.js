const models = require('../sequelize/models')

module.exports = {
    async paymentMethod({ id }, req){
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }*/
        return await models.PaymentMethod.findByPk(id)
    },
    async paymentMethods(args, req){
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }*/
        return await models.PaymentMethod.findAll()
    }
}