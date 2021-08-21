'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('clients', [{
      id: 1,
      name: 'Doe',
      password: '098f6bcd4621d373cade4e832627b4f6'
    }]);
  },

  down: async (queryInterface, Sequelize) => {     
      Example:
      await queryInterface.bulkDelete('clients', null, {});
     
  }
};
