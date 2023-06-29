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

module.exports = {
  list: async function () {
    const hotels = await HotelModel.findAll();
    return hotels;
  },

  save: async function (name, numberOfRooms, price) {
    const hotel = await HotelModel.create({
      name: name,
      numberOfRooms: numberOfRooms,
      price: price,
    });

    return hotel;
  },

  update: async function (id, name, numberOfRooms, price) {
    return await HotelModel.update(
      { name: name, numberOfRooms: numberOfRooms, price: price },
      {
        where: { codigo: id },
      }
    );
  },

  delete: async function (id) {
    const hotel = await this.getById(id);
    if (!hotel) {
      throw new Error('Hotel não encontrado');
    }

    await hotel.destroy();
    return hotel;
  },

  getById: async function (id) {
    return await HotelModel.findByPk(id);
  },

  Model: HotelModel,
};
