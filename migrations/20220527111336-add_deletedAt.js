'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'products',
        'deletedAt',
        {
          type: Sequelize.DATE,
          allowNull: true
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('products', 'deletedAt')
    ])
  }
};
