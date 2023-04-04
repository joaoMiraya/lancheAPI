'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('clientes', {
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
            sobrenome: {
                type: Sequelize.STRING,
                allowNull: false
            },
            bairro: {
                type: Sequelize.STRING,

            },
            rua: {
                type: Sequelize.STRING,

            },
            numero_casa: {
                type: Sequelize.STRING,

            },
            telefone: {
                type: Sequelize.STRING,

            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            senha: {
                type: Sequelize.STRING,
                allowNull: false
            },
            data_cadastro: {
                type: Sequelize.STRING,
                allowNull: false
            },

        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('clientes');
    }
};
