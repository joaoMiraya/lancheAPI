const { sequelize, DataTypes } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define(
        "Pedido", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        valor_total: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_cliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cdg_lanche: {
            type: DataTypes.INTEGER,

        },

        cdg_pizza: {
            type: DataTypes.INTEGER,

        },

        cdg_porcao: {
            type: DataTypes.INTEGER,

        },

        cdg_bebida: {
            type: DataTypes.INTEGER,
        },

    },
        {
            tablename: "pedido",
            timestamps: false
        }
    )


    return Pedido
}