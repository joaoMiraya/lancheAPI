const { sequelize, DataTypes } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    const Porcao = sequelize.define(
        "Porcao", {
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
        ingredientes: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preco_meia: {
            type: DataTypes.STRING,
            allowNull: false
        },

    },
        {
            tablename: "porcao",
            timestamps: false
        }
    )


    return Porcao
}