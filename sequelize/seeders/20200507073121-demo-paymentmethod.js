'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('PaymentMethod', [
        {
          name: "Pago en efectivo",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Pago con tarjeta",
          description: "",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]);
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PaymentMethod', null, {});
  }
};
