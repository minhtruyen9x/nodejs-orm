const { DataTypes, Sequelize } = require("sequelize")

module.exports = (sequelize) => {
    return sequelize.define("LikeRestaurant", {
        // Không có primary cho table này,
        // => dùng key id virtual bằng cách lấy 2 foreign key kết hợp
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

        dateLike: {
            type: DataTypes.DATE,
            field: "date_like",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
        }
    }, {
        timestamps: false,
        tableName: "like_res",
    })
}
