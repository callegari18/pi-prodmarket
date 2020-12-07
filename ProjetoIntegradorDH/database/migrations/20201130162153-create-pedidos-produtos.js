'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PedidosProdutos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Pedidos_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:'Pedidos',
          key: 'id'}
        },
      },
      Pedidos_Usuarios_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:'Usuarios',
          key: 'id'}
        },
      },
      Produtos_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:'Produtos',
          key: 'id'}
        },
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
    await queryInterface.dropTable('PedidosProdutos');
  }
};