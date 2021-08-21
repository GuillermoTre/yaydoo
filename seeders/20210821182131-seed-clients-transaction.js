'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let date = new Date();
    date.setHours(0, 0, 0, 0);

    return queryInterface.bulkInsert('clients_transaction', [{
      client_id: 1,
      acc_no_from: '54321',
      acc_no_to: '12345',
      amount: 123.2,
      created_at: date
    },
    {
      client_id: 1,
      acc_no_from: '12345',
      acc_no_to: '54321',
      amount: 321.5,
      created_at: '2021-08-20'
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {     
      Example:
      await queryInterface.bulkDelete('clients_transaction', null, {});
     
  }
};