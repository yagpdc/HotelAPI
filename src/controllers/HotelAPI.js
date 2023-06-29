const Hotel = require("../models/hotel");

const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.findAll();
    res.json(hotels);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Ocorreu um erro ao recuperar hotéis" });
  }
};

const createHotel = async (req, res) => {
  try {
    const { name, numberOfRooms, price } = req.body;

    await Hotel.create({
      name,
      numberOfRooms,
      price,
    });

    res.status(201).json({ message: "Hotel criado com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Ocorreu um erro ao criar o hotel" });
  }
};

const updateHotel = async (req, res) => {
  const { id } = req.params;
  const { name, numberOfRooms, price } = req.body;
  try {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
      throw new Error("Hotel não encontrado");
    }

    await hotel.update({ name, numberOfRooms });
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro ao atualizar o hotel" });
  }
};

const deleteHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
      throw new Error("Hotel não encontrado");
    }

    await hotel.destroy();
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro ao excluir o hotel" });
  }
};

const getHotelById = async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await Hotel.findByPk(id);
    if (!hotel) {
      throw new Error("Hotel não encontrado");
    }
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro ao obter o hotel" });
  }
};

module.exports = { getAllHotels, createHotel, updateHotel, deleteHotel, getHotelById };