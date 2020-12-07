'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enderecos extends Model {
   
    static associate(models) {

        Enderecos.belongsTo(models.Usuarios, { 
       through: 'Usuarios',
       as: 'usuarios',
       foreignKey: 'usuarios_id'})
    }
  };
  Enderecos.init({
    logradouro: DataTypes.STRING,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    cep: DataTypes.STRING,
    usuarios_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Enderecos',
  });
  return Enderecos;
};