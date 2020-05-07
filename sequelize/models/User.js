'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    image: DataTypes.TEXT
  }, {
    tableName: 'User'
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.UserEvent)
  };
  return User;
};