const models = require('../sequelize/models')
const { addMiddleware } = require('graphql-add-middleware');

module.exports.middlewares = (schema) => {
    addMiddleware(schema, 'Query.users', function (root, args, context, info, next) {
        console.log('MIDDLEWARE DE Query.users')
    });
}

module.exports.resolvers = {
    async user({ id }){
        return await models.User.findByPk(id)
    },
    async users(){
        return await models.User.findAll()
    }
};