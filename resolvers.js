const models = require('./sequelize/models')

module.exports = {
    Query : {
        user(_, { id }){
            return models.User.findByPk(id)
        },
        users(){
            return models.User.findAll()
        }
    }
};