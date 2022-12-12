const { DataTypes } = require("sequelize")
const sequelize = require('./index')
const LikeRestaurant = require("./LikeRestaurant")
const Restaurant = require("./Restaurant")

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "user_id"
    },

    fullName: {
        type: DataTypes.STRING(100),
        field: "full_name"
    },

    email: {
        type: DataTypes.STRING(100),
        unique: true
    },

    password: {
        type: DataTypes.STRING(100)
    }
}, {
    timestamps: false,
    tableName: "users",

    defaultScope: {
        attributes: {
            exclude: ["password"]
        }
    },

    hooks: {
        afterSave: (record) => {
            delete record.dataValues.password
            return record
        }
    }
})

// User.belongsToMany(Restaurant, { through: LikeRestaurant, foreignKey: "userId" })
// Restaurant.belongsToMany(User, { through: LikeRestaurant, foreignKey: "resId", otherKey: "userId" })

// User.belongsToMany(Restaurant, { through: RateRestaurant, foreignKey: "userId", otherKey: "resId" })
// Restaurant.belongsToMany(User, { through: RateRestaurant, foreignKey: "resId", otherKey: "userId" })


// User.belongsToMany(Food, { through: Order, foreignKey: "userId", otherKey: "foodId" })
// Food.belongsToMany(User, { through: Order, foreignKey: "foodId", otherKey: "userId" })
module.exports = User