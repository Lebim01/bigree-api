'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserEvent = sequelize.define('UserEvent', {
    status: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    EventId: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      get(){
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
      }
    }
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