const { DataTypes } = require("sequelize")
const sequelize = require('./index')

const User = require('./User')
const Restaurant = require('./Restaurant')

const RateRestaurant = sequelize.define("RateRestaurant", {
    id: {
        type: DataTypes.VIRTUAL,
        unique: 'compositeIndex',
        autoIncrement: true,
        primaryKey: true,
        get() {
            return `${this.userId}-${this.resId}`
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
        references: {
            model: User,
            key: 'id'
        }
    },

    resId: {
        type: DataTypes.INTEGER,
        field: "res_id",
        references: {
            model: Restaurant,
            key: 'id'
        }
    },

    amount: {
        type: DataTypes.INTEGER,
    },

    dateRate: {
        type: DataTypes.DATE,
        field: "date_rate",
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false,
    tableName: "rate_res"
})


// RateRestaurant.removeAttribute("id")
// User.hasMany(RateRestaurant, {
//     foreignKey: "userId"
// })
RateRestaurant.belongsTo(User, {
    foreignKey: "userId",
    as: "user"
})

RateRestaurant.belongsTo(Restaurant, {
    foreignKey: "resId",
    as: "restaurant"
})

// Restaurant.hasMany(RateRestaurant, {
//     foreignKey: "resId"
// })
// RateRestaurant.belongsTo(User)

module.exports = RateRestaurant