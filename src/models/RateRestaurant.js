const { DataTypes, Sequelize } = require("sequelize")

module.exports = (sequelize) => {
    return sequelize.define("RateRestaurant", {
        id: {
            type: DataTypes.VIRTUAL,
            autoIncrement: true,
            primaryKey: true,
            get() {
                return `${this.userId}-${this.resId}`
            }
        },

        userId: {
            type: DataTypes.INTEGER,
            field: "user_id",
        },

        resId: {
            type: DataTypes.INTEGER,
            field: "res_id",
        },

        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        dateRate: {
            type: DataTypes.DATE,
            field: "date_rate",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        }
    }, {
        timestamps: false,
        tableName: "rate_res"
    })
}



