const { sequelize, DataTypes } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define(
        "Cliente", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sobrenome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bairro: {
            type: DataTypes.STRING,

        },
        rua: {
            type: DataTypes.STRING,

        },
        numero_casa: {
            type: DataTypes.STRING,

        },
        telefone: {
            type: DataTypes.STRING,

        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data_cadastro: {
            type: DataTypes.STRING,
            allowNull: false
        }


    },
        {
            tablename: "cliente",
            timestamps: false
        }
    )


    return Cliente
}