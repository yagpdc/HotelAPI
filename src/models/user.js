const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  codigo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = {
  list: async function () {
    const users = await UserModel.findAll();
    return users;
  },

  save: async function (username, password, isAdmin = false) {
    const user = await UserModel.create({
      username: username,
      password: password,
      isAdmin: isAdmin,
    });

    return user;
  },

  update: async function (id, username, password, isAdmin = false) {
    return await UserModel.update(
      { username: username, password: password, isAdmin: isAdmin },
      {
        where: { codigo: id },
      }
    );
  },

  delete: async function (id) {
    const user = await this.getById(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    await user.destroy();
    return user;
  },

  Model: User
};
