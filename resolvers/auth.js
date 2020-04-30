const jwt = require('jsonwebtoken')
const models = require('../sequelize/models')

module.exports.resolvers = {
    async login({ username, password }){
        try {
            const user = await models.findAll({ username })
            if (!user) {
                throw 'Usuario no encontrado'
            }
            const isEqual = jwt.verify(password, process.env.HASH)
            if (!isEqual) {
                throw 'Contraseña no valida'
            }
        }catch(err){
            throw err
        }
    }
}