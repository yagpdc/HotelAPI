const { Hotel } = require('../models/hotel');

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

const getHotelById = async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel não encontrado' });
    }
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao obter o hotel' });
  }
};

const updateHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, numberOfRooms } = req.body;
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel não encontrado' });
    }
    await hotel.update({
      name,
      numberOfRooms,
    });
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar o hotel' });
  }
};

const deleteHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel não encontrado' });
    }
    await hotel.destroy();
    res.json({ message: 'Hotel excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao excluir o hotel' });
  }
};

module.exports = {
  getAllHotels,
  createHotel,
  getHotelById,
  updateHotel,
  deleteHotel,
};
