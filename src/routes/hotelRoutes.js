const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/HotelAPI');

// Rota para obter todos os hotéis
router.get('/', hotelController.getAllHotels);

// Rota para criar um novo hotel
router.post('/', hotelController.createHotel);

// Rota para obter um hotel pelo ID
router.get('/:id', hotelController.getHotelById);

// Rota para atualizar um hotel pelo ID
router.put('/:id', hotelController.updateHotel);

// Rota para excluir um hotel pelo ID
router.delete('/:id', hotelController.deleteHotel);

module.exports = router;
