const { Op, Sequelize } = require("sequelize");
const models = require('../sequelize/models')

module.exports = {
    async event({ id }, req){
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
    async events({ search, own }, req){
        let where = {
            [Op.or] : [],
            [Op.and] : []
        }
        
        if(search){
            where[Op.or] = [
                ...where[Op.or],
                Sequelize.where(Sequelize.fn('lower', Sequelize.col('title')), 'LIKE', Sequelize.fn('lower',`%${search}%`)),
                Sequelize.where(Sequelize.fn('lower', Sequelize.col('description')), 'LIKE', Sequelize.fn('lower',`%${search}%`)),
                Sequelize.where(Sequelize.fn('lower', Sequelize.col('location')), 'LIKE', Sequelize.fn('lower',`%${search}%`)),
            ]
        }

        if(own && req.isAuth){
            where[Op.and] = [
                ...where[Op.and],
                {
                    HostId: req.idUser
                }
            ]
        }

        return await models.Event.findAll({
            include: [
                {
                    model: models.UserEvent,
                    include: models.User
                },
                models.Category
            ],
            where
        })
    },
    async createEvent({ title, description, location, date, image, price }){
        if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }
        const event = models.Event.build({
            title,
            description,
            location,
            date,
            image,
            price,
            HostId: req.idUser
        });

        await event.save();

        return event;
    },
    async updateEvent({ id, title, description, location, date, image, price }){
        if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }
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
    async asistEvent({ idEvent }, req){
        if (!req.isAuth) {
            throw new Error('Unauthenticated!')
        }
        const event = models.UserEvent.build({
            EventId: idEvent,
            UserId: req.idUser
        });

        await event.save();

        return event;
    },
}