const { DataTypes } = require("sequelize")
const sequelize = require('./index')
// const LikeRestaurant = require("./LikeRestaurant")
// const User = require("./User")


const Restaurant = sequelize.define("Restaurant", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "res_id"
    },

    resName: {
        type: DataTypes.STRING(100),
        field: "res_name"
    },

    image: {
        type: DataTypes.STRING(255),
        field: "Image"
    },

    description: {
        type: DataTypes.STRING(255),
        field: "descr"
    }
}, {
    timestamps: false,
    tableName: "restaurant"
})

// User.belongsToMany(Restaurant, { through: LikeRestaurant, foreignKey: "userId", otherKey: "resId" })
// Restaurant.belongsToMany(User, { through: LikeRestaurant, foreignKey: "resId", otherKey: "userId" })

// User.belongsToMany(Restaurant, { through: RateRestaurant, foreignKey: "userId", otherKey: "resId" })
// Restaurant.belongsToMany(User, { through: RateRestaurant, foreignKey: "resId", otherKey: "userId" })


module.exports = Restaurant