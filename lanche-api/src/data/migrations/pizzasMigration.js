'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('pizzasfalse', {
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
            preco_p: {
                type: Sequelize.STRING,
                allowNull: false
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('pizzas');
    }
};
