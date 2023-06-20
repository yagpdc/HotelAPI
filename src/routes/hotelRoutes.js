const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware.authenticate, hotelController.getAllHotels);
router.post('/', authMiddleware.authenticate, authMiddleware.isAdmin, hotelController.createHotel);

module.exports = router;
