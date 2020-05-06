const models = require('../sequelize/models')

module.exports = {
    async event({ id }, req){
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }*/
        return await models.Event.findOne({
            where: {
                id
            },
            include: {
                model: models.UserEvent,
                include: models.User
            },
        })
    },
    async events(args, req){
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }*/
        return await models.Event.findAll({
            include: {
                model: models.UserEvent,
                include: models.User
            }
        })
    },
    async createEvent({ title, description, location, date, image, price }){
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }*/
        const event = models.Event.build({
            title,
            description,
            location,
            date,
            image,
            price
        });

        await event.save();

        return event;
    }
}