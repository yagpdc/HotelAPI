const express = require('express');
const HotelController = require('../controllers/HotelAPI');
const { authenticate, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

// Rotas públicas
router.get('/', HotelController.getAllHotels);
router.get('/:id', HotelController.getHotelById);

// Rotas autenticadas
router.post('/', authenticate, isAdmin, HotelController.createHotel);
router.put('/:id', authenticate, isAdmin, HotelController.updateHotel);
router.delete('/:id', authenticate, isAdmin, HotelController.deleteHotel);

module.exports = router;
