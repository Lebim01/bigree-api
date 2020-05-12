'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Event',
      'HostId',
      Sequelize.INTEGER
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Event',
      'HostId'
    )
  }
};
