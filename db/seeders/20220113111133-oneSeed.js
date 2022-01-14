'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Roles', [
      { nameR: 'Admin', createdAt: new Date(), updatedAt: new Date() },
      { nameR: 'User', createdAt: new Date(), updatedAt: new Date() }
    ], {});

    await queryInterface.bulkInsert('Statuses', [
      { nameS: 'В ожидании', createdAt: new Date(), updatedAt: new Date() },
      { nameS: 'В работе', createdAt: new Date(), updatedAt: new Date() },
      { nameS: 'Доставлен', createdAt: new Date(), updatedAt: new Date() },
      { nameS: 'Собран', createdAt: new Date(), updatedAt: new Date() },
      { nameS: 'Рекламация', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    await queryInterface.bulkInsert('Brigades', [
      { nameBr: 'Бригада 1', createdAt: new Date(), updatedAt: new Date() },
      { nameBr: 'Бригада 2', createdAt: new Date(), updatedAt: new Date() },
      { nameBr: 'Бригада 3', createdAt: new Date(), updatedAt: new Date() },
    ], {});

    await queryInterface.bulkInsert('Mebels', [
      { nameMeb: 'Стол', createdAt: new Date(), updatedAt: new Date() },
      { nameMeb: 'Кухонная мебель', createdAt: new Date(), updatedAt: new Date() },
      { nameMeb: 'Кровати', createdAt: new Date(), updatedAt: new Date() },
    ], {});



  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
