const { sequelize, DataTypes } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    const Lanche = sequelize.define(
        "Lanche", {
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        categoria: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    },
        {
            tablename: "lanche",
            timestamps: false
        }
    )


    return Lanche
}