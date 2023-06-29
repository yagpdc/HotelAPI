const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const apiInstall = require('./controllers/installAPI');


const port = 3000;


app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/hotels', hotelRoutes);
app.use('/users', userRoutes)

app.use(apiInstall) 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

