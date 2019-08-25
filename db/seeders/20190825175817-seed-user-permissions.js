'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        let permissions = [];

        for (let i = 0; i < 32; i++) {
            permissions.push({
                userId: 1,
                permissionId: i + 1,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }

        return queryInterface.bulkInsert('UserPermission', permissions, {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
        return queryInterface.bulkDelete('UserPermission', null, {});
    }
};
