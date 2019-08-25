'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            mobile: {
                type: Sequelize.STRING,
                allowNull: false
            },
            NIC: {
                type: Sequelize.STRING,
                allowNull: false
            },
            nicPermissionType: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            isMerchantUser: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            merchantId: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            hasAllPermissions: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};
