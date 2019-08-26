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
        return queryInterface.bulkInsert('Users', [{
            email: 'admin@lucky.com',
            password: '$2a$10$hFPFCKOFebtOnMeODRNT2uPo7Hkq/Xz8FuNIroHhp/t2QQQN6GwZu',
            /* admin@123 */
            mobile: '0154253256',
            firstName: 'lucky1',
            lastName: 'admin',
            NIC: '000000000V',
            nicPermissionType: 1,
            isMerchantUser: false,
            merchantId: 0,
            hasAllPermissions: true,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
        return queryInterface.bulkDelete('Users', null, {});
    }
};
