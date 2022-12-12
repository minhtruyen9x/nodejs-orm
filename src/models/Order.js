const { DataTypes } = require("sequelize")
const sequelize = require('./index')

const Food = require("./Food")
const User = require('./User')

const Order = sequelize.define("Order", {
    id: {
        type: DataTypes.VIRTUAL,
        unique: 'compositeIndex',
        autoIncrement: true,
        primaryKey: true,
        get() {
            return `${this.userId}-${this.foodId}`
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
        references: {
            model: User,
            key: "id"
        }
    },

    foodId: {
        type: DataTypes.INTEGER,
        field: "food_id",
        references: {
            model: Food,
            key: "id"
        }
    },

    amount: {
        type: DataTypes.INTEGER
    },

    code: {
        type: DataTypes.STRING(100)
    },

    arrSubId: {
        type: DataTypes.STRING(100),
        field: "arr_sub_id"
    }
}, {
    timestamps: false,
    tableName: "orders"
})


// Order.removeAttribute("id")
// User.hasMany(Order, {
//     foreignKey: "userId"
// })
// Order.belongsTo(User)

// Food.hasMany(Order, {
//     foreignKey: "foodId"
// })
// Order.belongsTo(Food)

module.exports = Order