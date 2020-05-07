const models = require('../sequelize/models')

module.exports = {
    async category({ id }, req){
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }*/
        return await models.Category.findByPk(id)
    },
    async categories(args, req){
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }*/
        return await models.Category.findAll()
    },
    async createCategory({ name, image }){
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }*/
        const category = models.Category.build({
            name,
            image
        });

        await category.save();

        return category;
    },
    async updateCategory({ name, image }){
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }*/
        let category = await models.Category.findByPk(id)

        category.name = name
        category.image = image

        await category.save();

        return category;
    },
}