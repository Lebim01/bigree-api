'use strict';
const moment = require('moment')

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    location: DataTypes.STRING,
    image: DataTypes.TEXT,
    CategoryId: DataTypes.INTEGER,
    HostId: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    date: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('date')).format('YYYY-MM-DD');
      }
    }
  }, {
    tableName: 'Event'
  });
  Event.associate = function(models) {
    // associations can be defined here
    Event.hasMany(models.UserEvent)
    Event.belongsTo(models.Category)
    Event.belongsTo(models.User, {
      as: 'Host',
      foreignKey: {
        name: 'HostId'
      }
    })
  };
  return Event;
};