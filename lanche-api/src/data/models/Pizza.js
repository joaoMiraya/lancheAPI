const { sequelize, DataTypes } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    const Pizza = sequelize.define(
        "Pizza", {
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
        preco_p: {
            type: DataTypes.STRING,
            allowNull: false
        },
     
    },
        {
            tablename: "pizza",
            timestamps: false
        }
    )


    return Pizza
}