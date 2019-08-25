'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Lotteries', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING(200),
                allowNull: false
            },
            totalFields: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                defaultValue: '2'
            },
            bonusFields: {
                type: Sequelize.INTEGER(11),
                allowNull: true
            },
            mainImage: {
                type: Sequelize.STRING(100),
                allowNull: true
            },
            mobileImage: {
                type: Sequelize.STRING(100),
                allowNull: true
            },
            buyingPrice: {
                type: Sequelize.FLOAT,
                allowNull: true
            },
            ticketPrice: {
                type: Sequelize.FLOAT,
                allowNull: true
            },
            validityDays: {
                type: Sequelize.STRING(100),
                allowNull: true
            },
            appId: {
                type: Sequelize.STRING(100),
                allowNull: true
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
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
        return queryInterface.dropTable('Lotteries');
    }
};
