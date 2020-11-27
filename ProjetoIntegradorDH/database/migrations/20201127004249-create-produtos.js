'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoria: {
        type: Sequelize.STRING
      },
      qualificação: {
        type: Sequelize.STRING
      },
      quantidade: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      imagem: {
        type: Sequelize.STRING
      },
      codigo_produto: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Produtos');
  }
};