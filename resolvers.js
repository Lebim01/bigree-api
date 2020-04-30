const models = require('./sequelize/models')

module.exports = {
    async user(_, { id }){
        return await models.User.findByPk(id)
    },
    async users(){
        return await models.User.findAll()
    }
};