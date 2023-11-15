// models/friend.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    static associate(models) {
      // Define associations here
    }
  }
  Friend.init(
    {
      userId: DataTypes.INTEGER,
      friendId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Friend',
    }
  );
  return Friend;
};
