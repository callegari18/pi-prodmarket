'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Produtos.belongsTo(models.Usuarios, { 
     through: 'Usuarios',
     as: 'usuarios',
     foreignKey: 'usuarios_id'})
  
};
  };
  Produtos.init({
    categoria: DataTypes.STRING,
    nome: DataTypes.STRING,
    tipo: DataTypes.STRING,
    quantidade: DataTypes.STRING,
    valor: DataTypes.STRING,
    imagem: DataTypes.STRING,
    Usuarios_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};