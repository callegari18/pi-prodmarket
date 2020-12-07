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
    Pedidos_id: DataTypes.INTEGER,
    Pedidos_Usuarios_id: DataTypes.INTEGER,
    Produtos_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PedidosProdutos',
  });
  return PedidosProdutos;
};