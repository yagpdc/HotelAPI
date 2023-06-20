const { DataTypes } = require('sequelize');
const database = require('../config/database');

const Hotel = database.define('Hotel', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numberOfRooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  module.exports = Hotel;