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

module.exports = { getAllHotels, createHotel };
