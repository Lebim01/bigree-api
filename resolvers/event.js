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
            include: [
                {
                    model: models.UserEvent,
                    include: models.User
                },
                models.Category
            ],
        })
    },
    async events(args, req){
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }*/
        return await models.Event.findAll({
            include: [
                {
                    model: models.UserEvent,
                    include: models.User
                },
                models.Category
            ]
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
    },
    async updateEvent({ id, title, description, location, date, image, price }){
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }*/
        let event = await models.Event.findByPk(id)

        event.title = title
        event.description = description
        event.location = location
        event.date = date
        event.image = image
        event.price = price

        await event.save();

        return event;
    },
    async asistEvent({ idEvent }){
        /*if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }*/
        const event = models.UserEvent.build({
            EventID: idEvent
        });

        await event.save();

        return event;
    },
}