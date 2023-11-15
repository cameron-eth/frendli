// Edit seeders/XXXXXXXXXXXXX-demo-experiences.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Experiences', [
      {
        name: 'Fred Again, DJ Set @ Butterfly',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Another Experience',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more seed data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Experiences', null, {});
  },
};
