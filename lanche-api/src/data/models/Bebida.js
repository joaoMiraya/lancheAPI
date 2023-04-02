const { sequelize, DataTypes } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    const Bebida = sequelize.define(
        "Bebida", {
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
        preco: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
     
    },
        {
            tablename: "bebida",
            timestamps: false
        }
    )


    return Bebida
}