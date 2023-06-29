const User = require('../models/user').Model;
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    console.log(hashedPassword);
    console.log(req.body);
    await User.create({
      username,
      password: hashedPassword,
    });
    res.status(201).json({ message: 'Usuário registrado' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ocorreu um erro ao registrar o usuário' });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.headers.authorization);
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: 'Usuário ou senha inválidos' });
    }
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    const isPasswordValid = crypto.timingSafeEqual(Buffer.from(user.password), Buffer.from(hashedPassword));
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Usuário ou senha inválidos' });
    }
    const token = jwt.sign({ userId: user.id }, 'secret');
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ocorreu um erro' });
  }
};

module.exports = { register, login };
