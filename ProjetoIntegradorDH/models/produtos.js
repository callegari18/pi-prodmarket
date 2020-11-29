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
      // define association here
    }
  };
  Produtos.init({
    categoria: DataTypes.STRING,
    qualificação: DataTypes.STRING,
    quantidade: DataTypes.STRING,
    valor: DataTypes.STRING,
    descricao: DataTypes.STRING,
    imagem: DataTypes.STRING,
    codigo_produto: DataTypes.STRING,
    Usuarios_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};