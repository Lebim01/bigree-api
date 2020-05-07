'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    image: DataTypes.TEXT
  }, {
    tableName: 'Category'
  });
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Event)
  };
  return Category;
};