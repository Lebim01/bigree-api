'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserEvent = sequelize.define('UserEvent', {
    status: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    EventId: DataTypes.INTEGER
  }, {
    tableName: 'UserEvent'
  });
  UserEvent.associate = function(models) {
    // associations can be defined here
    UserEvent.belongsTo(models.User)
    UserEvent.belongsTo(models.Event)
  };
  return UserEvent;
};