'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numZakaz: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      dateBuild: {
        type: Sequelize.STRING,
      },
      dateDeliverly: {
        type: Sequelize.STRING
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      brigade_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Brigades',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Statuses',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      mebel_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Mebels',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
    await queryInterface.dropTable('Orders');
  }
};
