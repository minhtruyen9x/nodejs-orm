const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    return sequelize.define("SubFood", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "sub_id"
        },

        foodId: {
            type: DataTypes.INTEGER,
            field: "food_id",
        },

        subName: {
            type: DataTypes.STRING(255),
            field: "sub_name",
            allowNull: false
        },

        subPrice: {
            type: DataTypes.FLOAT,
            field: "sub_price",
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: "sub_food"
    })
}

