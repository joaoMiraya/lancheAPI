const { sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Acrescimo = sequelize.define(
        "Acrescimo", {
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
            type: DataTypes.STRING,
            allowNull: false
        },

    },
        {
            tablename: "acrescimo",
            timestamps: false
        }
    )


    return Acrescimo
}