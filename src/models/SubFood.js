const { DataTypes } = require("sequelize")
const sequelize = require('./index')

const Food = require("./Food")


const SubFood = sequelize.define("SubFood", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "sub_id"
    },

    foodId: {
        type: DataTypes.INTEGER,
        field: "food_id",
        references: {
            model: Food,
            key: "id"
        }
    },

    subName: {
        type: DataTypes.STRING(255),
        field: "sub_name"
    },

    subPrice: {
        type: DataTypes.FLOAT,
        field: "sub_price"
    }
}, {
    timestamps: false,
    tableName: "sub_food"
})

// Food.hasMany(SubFood, {
//     foreignKey: "foodId"
// })
// SubFood.belongsTo(Food)

module.exports = SubFood