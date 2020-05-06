'use strict';

const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert('User', [
        {
          name: 'Victor',
          email: 'victoralvarezsaucedo@gmail.com',
          password: await bcrypt.hash('123987xd', 10),
          image: 'https://lh3.googleusercontent.com/a-/AOh14Gip16U5TkwGTF0ksIZGG4rzRYLumbQ6t7ZY9xeT-w=s288-c-rg-br100',
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
    return queryInterface.bulkDelete('User', null, {});
  }
};
