'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('UserPermission', {
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id',
                },
                onUpdate: 'SET NULL',
                onDelete: 'CASCADE'
            },
            permissionId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Permissions',
                    key: 'id',
                },
                onUpdate: 'SET NULL',
                onDelete: 'CASCADE'
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
        return queryInterface.dropTable('UserPermissions');
    }
};
