const jwt = require('jsonwebtoken');
const User = require('../models/User');
const crypto = require('node:crypto'); 

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword =  crypto.createHash('sha256', "123456").update(password).digest('hex');
    console.log(hashedPassword)
    console.log(req.body)
    await User.create({
      username,
      password: hashedPassword,
    });
    res.status(201).json({ message: 'Usuario registrado' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Um erro aconteceu registrando o usuario' });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.headers.authorization)
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: 'Usuario ou senha invalido' });
    }
    const hashedPassword =  crypto.createHash('sha256', "123456").update(password).digest('hex');
    const isPasswordValid = crypto.timingSafeEqual(Buffer.from(user.password), Buffer.from(hashedPassword));
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Usuario ou senha invalido' });
    }
    const token = jwt.sign({ userId: user.id }, 'secret');
    res.json({ token });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Um erro ocorreu' });
  }
};

module.exports = { register, login };
