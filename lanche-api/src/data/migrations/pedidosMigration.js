'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('pedidos', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            valor_total: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            id_cliente: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            cdg_lanche: {
                type: Sequelize.INTEGER,

            },

            cdg_pizza: {
                type: Sequelize.INTEGER,

            },

            cdg_porcao: {
                type: Sequelize.INTEGER,

            },

            cdg_bebida: {
                type: Sequelize.INTEGER,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('pedidos');
    }
};
