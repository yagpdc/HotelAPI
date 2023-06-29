const express = require("express");
const router = express.Router();
const UserModel = require('../models/user').Model;
const HotelModel = require('../models/hotel').Model;
const sequelize = require('../config/database');

router.get('/apiTest', async (req, res) => {
    await sequelize.sync({ force: true });

    let users = [
        { username: 'Yago', password: 'password123', isAdmin: true },
        { username: 'mary', password: 'password456', isAdmin: false },
        { username: 'james', password: 'password789', isAdmin: false },
        { username: 'jane', password: 'password101', isAdmin: false},
        { username: 'john', password: 'password112', isAdmin: false},
        { username: 'joe', password: 'password131', isAdmin: false},
        { username: 'jake', password: 'password415', isAdmin: false},
        { username: 'josh', password: 'password161', isAdmin: false},
        { username: 'jim', password: 'password718', isAdmin: false},
        { username: 'jerry', password: 'password191', isAdmin: false},
        { username: 'jill', password: 'password020', isAdmin: false},
        { username: 'june', password: 'password212', isAdmin: false},
        { username: 'jade', password: 'password323', isAdmin: false},
        { username: 'jenny', password: 'password424', isAdmin: false},
    ];

    let createdUsers = [];
    for (let i = 0; i < users.length; i++) {
        createdUsers.push(await UserModel.create(users[i]));
    }

    let hotel1 = await HotelModel.create({ name: 'Hotel A', numberOfRooms: 50, price: 100 });
    let hotel2 = await HotelModel.create({ name: 'Hotel B', numberOfRooms: 100, price: 200 });
    let hotel3 = await HotelModel.create({ name: 'Hotel C', numberOfRooms: 80, price: 150 });

    let hotels = [hotel1, hotel2, hotel3];

    res.json({ status: true, users: createdUsers, hotels: hotels });
});

module.exports = router;
