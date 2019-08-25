'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('LotteryFields', {
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
                type: Sequelize.STRING(100),
                allowNull: false
            },
            formatType: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            values: {
                type: Sequelize.STRING(200),
                allowNull: false
            },
            isSpecialField: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            specialFieldValue: {
                type: Sequelize.STRING(200),
                allowNull: false
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
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('LotteryFields');
    }
};
