const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Hotel = sequelize.define('Hotel', {
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