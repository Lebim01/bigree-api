'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'User',
        'status',
       Sequelize.STRING
      ),
      queryInterface.addColumn(
        'User',
        'tokenVerify',
       Sequelize.STRING
      ),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'User',
        'status'
      ),
      queryInterface.removeColumn(
        'User',
        'tokenVerify'
      ),
    ])
  }
};
