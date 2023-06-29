const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const HotelModel = sequelize.define('Hotel', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numberOfRooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
});

module.exports = HotelModel ;
