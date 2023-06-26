const express = require("express");
const router = express.Router();
const sequelize = require("../helpers/bd");

const UserModel = require('../model/User');
const HotelModel = require('../model/Hotel');

router.get('/', async (req, res) => {
    await sequelize.sync({ force: true });

    let users = [
        { username: 'Yago', password: 'password123', isAdmin: true },
        { username: 'mary', password: 'password456', isAdmin: false },
        { username: 'james', password: 'password789', isAdmin: false }
    ];

    let createdUsers = [];
    for (let i = 0; i < users.length; i++) {
        createdUsers.push(await UserModel.create(users[i]));
    }

    let hotel1 = await HotelModel.create({ name: 'Hotel A', numberOfRooms: 50 });
    let hotel2 = await HotelModel.create({ name: 'Hotel B', numberOfRooms: 100 });
    let hotel3 = await HotelModel.create({ name: 'Hotel C', numberOfRooms: 80 });

    let hotels = [hotel1, hotel2, hotel3];

    res.json({ status: true, users: createdUsers, hotels: hotels });
});

module.exports = router;
