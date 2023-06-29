const UserModel = require('../models/user');

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Ocorreu um erro ao listar usuários' });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, password, isAdmin } = req.body;
    const user = await UserModel.save(username, password, isAdmin);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao criar o usuário' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.getById(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao obter o usuário' });
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password, isAdmin } = req.body;
    const result = await UserModel.update(id, username, password, isAdmin);
    if (result[0] === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json({ message: 'Usuário atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar o usuário' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.delete(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json({ message: 'Usuário excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao excluir o usuário' });
  }
};

module.exports = { getAllUsers, createUser, getUserById, updateUser, deleteUser };
