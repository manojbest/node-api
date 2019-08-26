'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Draws', {
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
            drawDay: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            salesStartOn: {
                type: Sequelize.STRING(10),
                allowNull: true
            },
            salesEndOn: {
                type: Sequelize.STRING(10),
                allowNull: true
            },
            drawTime: {
                type: Sequelize.STRING(10),
                allowNull: true
            },
            returnOn: {
                type: Sequelize.STRING(10),
                allowNull: true
            },
            firstIssueDate: {
                type: Sequelize.DATEONLY,
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
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Draws');
    }
};
