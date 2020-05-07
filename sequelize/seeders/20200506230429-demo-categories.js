'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('Category', [
        {
          name: "Fiesta Publica",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Fiesta Privada",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Fiesta de antro",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Fiesta escolar",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Concierto",
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
    return queryInterface.bulkDelete('Category', null, {});
  }
};
