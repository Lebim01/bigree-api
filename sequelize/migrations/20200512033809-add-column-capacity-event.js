'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Event',
      'capacity',
      Sequelize.INTEGER
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Event',
      'capacity'
    )
  }
};
