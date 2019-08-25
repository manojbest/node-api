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
        const permissions = ['Lottery', 'Draw', 'Campaigns', 'Packages', 'Reports', 'AdminUsers', 'SMSTemplate', 'Subscribers'];
        const actions = ['Add', 'Edit', 'Delete', 'View'];

        let defaultPermissions = [];

        permissions.forEach((p) => {
            actions.forEach((a) => {
                defaultPermissions.push({
                    name: `${a}_${p}`,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
            });
        })

        return queryInterface.bulkInsert('Permissions', defaultPermissions, {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
        return queryInterface.bulkDelete('Permissions', null, {});
    }
};
