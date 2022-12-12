const { DataTypes } = require("sequelize")
const sequelize = require('./index')

const User = require('./User')
const Restaurant = require('./Restaurant')

const LikeRestaurant = sequelize.define("LikeRestaurant", {
    // Không có primary cho table này,
    // => dùng key id virtual bằng cách lấy 2 foreign key kết hợp
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

    dateLike: {
        type: DataTypes.DATE,
        field: "date_like",
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false,
    tableName: "like_res",
})

// LikeRestaurant.removeAttribute("id")
// User.hasMany(LikeRestaurant, {
//     foreignKey: "userId"
// })
LikeRestaurant.belongsTo(User, {
    foreignKey: "userId",
    as: "user"
})

// Restaurant.hasMany(LikeRestaurant, {
//     foreignKey: "resId"
// })
LikeRestaurant.belongsTo(Restaurant, {
    foreignKey: "resId",
    as: "restaurant"
})

module.exports = LikeRestaurant