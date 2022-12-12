const { DataTypes } = require('sequelize')
const sequelize = require('./index')

const FoodType = require('./FoodType')

const Food = sequelize.define("Food", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "food_id"
    },

    foodName: {
        type: DataTypes.STRING(255),
        field: "food_name"
    },

    image: {
        type: DataTypes.STRING(255)
    },

    price: {
        type: DataTypes.FLOAT
    },

    description: {
        type: DataTypes.STRING(255),
        field: "descr"
    },

    typeId: {
        type: DataTypes.INTEGER,
        field: "type_id",
        references: {
            model: FoodType,
            key: "id"
        }
    }
}, {
    timestamps: false,
    tableName: "foods"
})

// FoodType.hasMany(Food, {
//     foreignKey: "typeId"
// })
// Food.belongsTo(FoodType)

module.exports = Food