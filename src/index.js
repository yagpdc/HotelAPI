const express = require('express');
const app = express();
const User = require('./models/User');
const database = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const { authenticate } = require('./middleware/authMiddleware');
const port = 3000;
const router = express.Router();


app.use(express.urlencoded({ extended: true }))

app.use(express.json());
app.use(authenticate)
app.use('/auth', authRoutes);
app.use('/hotels', hotelRoutes);

app.get('/test/user', async (req, res) => {
//   try {
//     const user = await User.create({
//       username: 'renato',
//       password: '123456',
//     });
// console.log(req.userId)
//     res.json(user);
  
//   } catch (error) {
//     res.status(500).json(error);
//   }
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

