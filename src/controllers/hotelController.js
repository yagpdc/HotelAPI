const { Hotel } = require('../models/Hotel');

const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.findAll();

    res.json(hotels);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao recuperar hotéis' });
  }
};

const createHotel = async (req, res) => {
  try {
    const { name, numberOfRooms } = req.body;

    await Hotel.create({
      name,
      numberOfRooms,
    });

    res.status(201).json({ message: 'Hotel criado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao criar o hotel' });
  }
};

const list = async () => {
  try {
    const hotels = await Hotel.findAll();
    return hotels;
  } catch (error) {
    throw new Error('Ocorreu um erro ao listar hotéis');
  }
};

const create = async (name, numberOfRooms) => {
  try {
    await Hotel.create({
      name,
      numberOfRooms,
    });
  } catch (error) {
    throw new Error('Ocorreu um erro ao criar o hotel');
  }
};

const update = async (id, updatedHotel) => {
  try {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
      throw new Error('Hotel não encontrado');
    }

    await hotel.update(updatedHotel);
    return hotel;
  } catch (error) {
    throw new Error('Ocorreu um erro ao atualizar o hotel');
  }
};

const deleteHotel = async (id) => {
  try {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
      throw new Error('Hotel não encontrado');
    }

    await hotel.destroy();
  } catch (error) {
    throw new Error('Ocorreu um erro ao excluir o hotel');
  }
};

const getById = async (id) => {
  try {
    const hotel = await Hotel.findByPk(id);
    return hotel;
  } catch (error) {
    throw new Error('Ocorreu um erro ao obter o hotel');
  }
};

module.exports = { getAllHotels, createHotel, list, create, update, deleteHotel, getById };
