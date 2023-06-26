const User = require('../models/User');

const getAllUsers = async () => {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error('Ocorreu um erro ao listar usuários');
    }
  };
  
  const createUser = async (username, password, isAdmin = false) => {
    try {
      const user = await User.create({
        username,
        password,
        isAdmin,
      });
      return user;
    } catch (error) {
      throw new Error('Ocorreu um erro ao criar o usuário');
    }
  };
  
  const updateUser = async (id, updatedUser) => {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error('Usuário não encontrado');
      }
  
      await user.update(updatedUser);
      return user;
    } catch (error) {
      throw new Error('Ocorreu um erro ao atualizar o usuário');
    }
  };
  
  const deleteUser = async (id) => {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error('Usuário não encontrado');
      }
  
      await user.destroy();
    } catch (error) {
      throw new Error('Ocorreu um erro ao excluir o usuário');
    }
  };
  
  const getUserById = async (id) => {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      throw new Error('Ocorreu um erro ao obter o usuário');
    }
  };
  
  module.exports = { getAllUsers, createUser, updateUser, deleteUser, getUserById };
  