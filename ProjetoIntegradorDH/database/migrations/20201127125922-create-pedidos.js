'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero_de_pedido: {
        type: Sequelize.INTEGER
      },
      data_de_compra: {
        type: Sequelize.DATEONLY
      },
      data_de_entrega: {
        type: Sequelize.DATEONLY
      },
      produto: {
        type: Sequelize.STRING
      },
      codigo_produto: {
        type: Sequelize.STRING
      },
      quantidade: {
        type: Sequelize.STRING
      },
      valor_unitario: {
        type: Sequelize.STRING
      },
      valor_total: {
        type: Sequelize.STRING
      },
      tipo_frete: {
        type: Sequelize.STRING
      },
      valor_frete: {
        type: Sequelize.STRING
      },
      Usuarios_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pedidos');
  }
};