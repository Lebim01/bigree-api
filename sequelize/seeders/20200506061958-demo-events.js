'use strict';
const moment = require('moment')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('Event', [
        {
          title: 'Musik Fest',
          description: 'Esta es la descripción #1',
          price: 2800,
          date: moment('2020-05-06').toDate(),
          location: 'Estadio mariscal',
          image: 'https://www.google.com.mx/url?sa=i&url=https%3A%2F%2Fquepasaenmazatlanenlinea.com%2F2020%2F01%2F07%2Festo-es-lo-que-sabemos-sobre-el-somos-musik-fest-el-festival-musical-que-llegara-a-mazatlan-en-semana-de-pascua%2F&psig=AOvVaw1_Sszk4lpD-4ZOL0fTKusB&ust=1588832637356000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj__v3MnukCFQAAAAAdAAAAABAD',
          CategoryId: 2,
          HostId: 1,
          capacity: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Canserbero',
          description: '😎 Este es el mejor concierto del universo papu 😎',
          price: 100000,
          date: moment('2020-05-07').toDate(),
          location: 'Caracas, Venezuela',
          image: 'https://www.google.com.mx/url?sa=i&url=https%3A%2F%2Fwww.notitarde.com%2Fcanserbero-a-cuatro%2F&psig=AOvVaw2v7xPGiAxURQIvEj-6oBFH&ust=1588832692820000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDp2pXNnukCFQAAAAAdAAAAABAI',
          CategoryId: 5,
          HostId: 1,
          capacity: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'EDM Fest',
          description: 'Electronic music',
          price: 500,
          date: moment('2020-07-01').toDate(),
          location: 'Mexico city',
          image: 'https://www.google.com.mx/url?sa=i&url=https%3A%2F%2Fwww.producerloops.com%2FDownload-Mainroom-Warehouse-EDM-Fest-3.html&psig=AOvVaw11ovKg5Er7fyoVJiVq0cuV&ust=1588832784368000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPi878HNnukCFQAAAAAdAAAAABAI',
          CategoryId: 3,
          HostId: 1,
          capacity: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Event', null, {});
  }
};
