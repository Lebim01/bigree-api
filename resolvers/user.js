const models = require('./sequelize/models')

module.exports = {
    async user({ id }){
        console.log('user', id)
        return await models.User.findByPk(id)
    },
    async users(){
        return await models.User.findAll()
    }
};