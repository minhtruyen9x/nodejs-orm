const { DataTypes } = require("sequelize")
const sequelize = require('./index')


const FoodType = sequelize.define("FoodType", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "type_id"
    },

    typeName: {
        type: DataTypes.STRING(100),
        field: "type_name"
    }
}, {
    timestamps: false,
    tableName: "food_type"
})

module.exports = FoodType