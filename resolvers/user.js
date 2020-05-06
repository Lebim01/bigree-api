const models = require('../sequelize/models')

module.exports = {
    async user({ id }, req){
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }*/
        return await models.User.findByPk(id)
    },
    async users(args, req){
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }*/
        return await models.User.findAll()
    }
}