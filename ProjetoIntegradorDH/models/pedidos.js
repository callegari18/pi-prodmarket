'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pedidos.init({
    numero_de_pedido: DataTypes.STRING,
    data_de_compra: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};