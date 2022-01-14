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

    await queryInterface.bulkInsert('Users', [
      { nameU: 'Кирилл', email: 'kirill@k.ru', password: '123', role_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { nameU: 'Станислав', email: 'stan@s.ru', password: '1234', role_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { nameU: 'Степан', email: 'stepan@s.ru', password: '123', role_id: 2, createdAt: new Date(), updatedAt: new Date() },
    ], {});

    await queryInterface.bulkInsert('Clients', [
      { firstName: 'Николай', lastName: 'Петров', secondName: 'Петрович', location: 'г. Москва, Красная Площадь, Крыша', comment: 'Хочу побыстрее!', user_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'Сергей', lastName: 'Иванов', secondName: 'Сергеевич', location: 'г. Москва, Синяя Площадь, Подвал', comment: 'Можете не торопиться!', user_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'Даниэль', lastName: 'Белорусов', secondName: 'Евгеньевич', location: 'г. Москва, ул. Люк Надежды, д. 7', comment: '', user_id: 3, createdAt: new Date(), updatedAt: new Date() },
    ], {});

    await queryInterface.bulkInsert('Orders', [
      { numZakaz: 'E234-001', price: 45000, dateBuild: '12.01.2022', dateDeliverly: '13.01.2022', client_id: 1, brigade_id: 2, status_id: 2, mebel_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { numZakaz: 'E234-002', price: 41000, dateBuild: '10.01.2022', dateDeliverly: '12.01.2022', client_id: 1, brigade_id: 1, status_id: 1, mebel_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { numZakaz: 'E234-003', price: 41000, dateBuild: '05.01.2022', dateDeliverly: '11.01.2022', client_id: 3, brigade_id: 3, status_id: 3, mebel_id: 1, createdAt: new Date(), updatedAt: new Date() },
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
