const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    return sequelize.define("Order", {
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
        },

        foodId: {
            type: DataTypes.INTEGER,
            field: "food_id",
        },

        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        code: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        arrSubId: {
            type: DataTypes.STRING(100),
            field: "arr_sub_id",
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: "orders"
    })

}