'use strict';
const {
  Model
} = require('sequelize');
const database = require('../config/database');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuarios.init({
    tipo: DataTypes.STRING,
    nome: DataTypes.STRING,
    titulo: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    ie: DataTypes.STRING,
    nome_fantasia: DataTypes.STRING,
    ramo: DataTypes.STRING,
    codigo_ap: DataTypes.STRING,
    codigo_as: DataTypes.STRING,
    codigo_natureza: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    responsavel: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};