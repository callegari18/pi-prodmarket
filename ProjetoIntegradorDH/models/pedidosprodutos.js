'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PedidosProdutos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PedidosProdutos.init({
    pedidos_id: DataTypes.STRING,
    pedidos_usuarios_id: DataTypes.STRING,
    produtos_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PedidosProdutos',
  });
  return PedidosProdutos;
};