'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
   static associate(models) {
        this.hasMany(models.Enderecos, { 
        foreignKey: 'Usuarios_id',
        as: "endereco" })
    }
 };
  Usuarios.init({
    tipo: DataTypes.STRING,
    nome: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    ie: DataTypes.STRING,
    nome_fantasia: DataTypes.STRING,
    ramo: DataTypes.STRING,
    codigo_ap: DataTypes.STRING,
    codigo_as: DataTypes.STRING,
    codigo_natureza: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    imagem: DataTypes.STRING,
    responsavel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};