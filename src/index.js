const express = require('express');
const app = express();
const User = require('./models/User');
const database = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const { authenticate } = require('./middleware/authMiddleware');
const port = 3000;


app.use(express.urlencoded({ extended: true }))

app.use(express.json());
app.use(authenticate)
app.use('/auth', authRoutes);
app.use('/hotels', hotelRoutes);

app.get('/test/user', async (req, res) => {
  try {
    // const user = await User.create({
    //   username: 'renato',
    //   password: '123456',
    // });
console.log(req.userId)
    res.json(user);
  
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get('/test/userList', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

async function createUser() {
  try {
    await database.sync();
    console.log('Database synced');

    const user = await User.create({
      username: 'pickles_rick69',
      password: '420420420',
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

async function destroyAllUsers(){
  try {
    const users = await User.destroy({
      where: {},
      truncate: true,
    });
  } catch (error) {
    console.error('An error occurred while getting user by id:', error);
  }
}
// destroyAllUsers()
// createUser();
// getAllUsers();