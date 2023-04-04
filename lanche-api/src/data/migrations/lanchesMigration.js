'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('lanches', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: Sequelize
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: Sequelize
            },
            ingredientes: {
                type: DataTypes.STRING,
                allowNull: Sequelize
            },
            preco: {
                type: DataTypes.INTEGER,
                allowNull: Sequelize
            },
            categoria: {
                type: DataTypes.INTEGER,
                allowNull: Sequelize
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('lanches');
    }
};
