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

      Pedidos.belongsTo(models.Usuarios, { 
     through: 'Usuarios',
     as: 'usuarios',
     foreignKey: 'usuarios_id'})

     Pedidos.belongsToMany(models.Produtos, { 
      through: "PedidosProdutos",
      as: 'produtos',
      foreignKey: 'produtos_id'})
  };

  
  };
  Pedidos.init({
    numero_de_pedido: DataTypes.INTEGER,
    data_de_compra: DataTypes.DATEONLY,
    data_de_entrega: DataTypes.DATEONLY,
    produto: DataTypes.STRING,
    codigo_produto: DataTypes.STRING,
    quantidade: DataTypes.STRING,
    valor_unitario: DataTypes.STRING,
    valor_total: DataTypes.STRING,
    tipo_frete: DataTypes.STRING,
    valor_frete: DataTypes.STRING,
    Usuarios_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};