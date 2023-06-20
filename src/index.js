const express = require('express');
const app = express();
const User = require('./models/user');
const database = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const port = 3000;

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/hotels', hotelRoutes);

// app.get('/test/user', async (req, res) => {
//   try {
//     const user = await User.create({
//       username: 'john_doe',
//       password: '123456',
//     });

//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred while creating a user' });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


async function createUser() {
  try {
    await database.sync();
    console.log('Database synced');

    const user = await User.create({
      username: 'john_doe',
      password: '123456',
      isAdmin: true,
    });

    console.log('User created:', user);
  } catch (error) {
    console.error('An error occurred while creating a user:', error);
  }
}

async function getAllUsers() {
  try {
    const users = await User.findAll();
    console.log('All users:', JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('An error occurred while getting all users:', error);
  }
}


async function getUserById(id) {
  try {
    const user = await User.findByPk(id);
  } catch (error) {
    console.error('An error occurred while getting user by id:', error);
  }
}


getAllUsers();