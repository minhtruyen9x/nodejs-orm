const { DataTypes } = require("sequelize")


module.exports = (sequelize) => {
    return sequelize.define("Restaurant", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "res_id"
        },

        resName: {
            type: DataTypes.STRING(100),
            field: "res_name",
            allowNull: false
        },

        image: {
            type: DataTypes.STRING(255),
            field: "Image",
            allowNull: false
        },

        description: {
            type: DataTypes.STRING(255),
            field: "descr",
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: "restaurant"
    })
}


