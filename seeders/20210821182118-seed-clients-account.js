'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    return queryInterface.bulkInsert('clients_account', [{
      client_id: 1,
      acc_no: '12345',
      created_at: date
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {     
      Example:
      await queryInterface.bulkDelete('clients_account', null, {});
     
  }
};
