const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const models = require('../sequelize/models')

module.exports = {
    async register({ username, name, password }){
        try {
            const _isExistUser = await models.User.findOne({ where: { email: username } })
            if(_isExistUser){
                throw 'Este usuario ya existe'
            }

            const hashedPassword = await bcrypt.hash(password, 12);
    
            const user = models.User.build({
                email: username,
                name,
                password: hashedPassword
            });

            await user.save();

            return user;
        }catch(err){
            throw err
        }
    },
    async login({ username, password }){
        try {
            const user = await models.User.findOne({ where: { email: username } })
            if (!user) {
                throw 'Usuario no encontrado'
            }

            const isEqual = await bcrypt.compare(password, user.password)
            if (!isEqual) {
                throw 'Contraseña no valida'
            }

            const token = jwt.sign({
                userId: user.id,
                username: user.email
            }, process.env.HASH, { expiresIn: '1d' });

            return {
                token,
                tokenExpiration: '1d'
            }
        }catch(err){
            throw err
        }
    }
}