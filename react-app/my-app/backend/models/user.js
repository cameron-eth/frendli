// models/user.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.User, {
        through: 'Friend',
        as: 'friends',
        foreignKey: 'userId',
      });
      User.belongsToMany(models.User, {
        through: 'Friend',
        as: 'friendOf',
        foreignKey: 'friendId',
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
