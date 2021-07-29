'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      return queryInterface.createTable('Tarefas', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        nome: {
          type: Sequelize.STRING
        },
        descricao: {
          type: Sequelize.STRING
        },
        responsavel: {
          type: Sequelize.STRING
        },
        prazo: {
          type: Sequelize.DATE
        },
        concluida: {
          type: Sequelize.BOOLEAN
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        deletedAt: {
          type: Sequelize.DATE
        }
      })
    } catch (error) {
      console.log(error)
    }
    

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tarefas');
  }
};
