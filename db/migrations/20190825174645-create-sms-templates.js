'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('SMSTemplates', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            lotteryId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Lotteries',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            name: {
                type: Sequelize.STRING(200),
                allowNull: true
            },
            si: {
                type: Sequelize.STRING(400),
                allowNull: true
            },
            ta: {
                type: Sequelize.STRING(400),
                allowNull: true
            },
            en: {
                type: Sequelize.STRING(400),
                allowNull: true
            },
            isArchived: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }, {charset: 'utf8mb4', collate: 'utf8mb4_unicode_ci'});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('SMSTemplates');
    }
};
