'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentMethod = sequelize.define('PaymentMethod', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    tableName: 'PaymentMethod'
  });
  PaymentMethod.associate = function(models) {
    // associations can be defined here
  };
  return PaymentMethod;
};