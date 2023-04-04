'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('porcaos', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false
            },
            ingredientes: {
                type: Sequelize.STRING,
                allowNull: false
            },
            preco: {
                type: Sequelize.STRING,
                allowNull: false
            },
            preco_meia: {
                type: Sequelize.STRING,
                allowNull: false
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('porcaos');
    }
};
