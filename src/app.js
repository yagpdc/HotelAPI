const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const port = 3000;

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/hotels', hotelRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
