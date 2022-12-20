const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    return sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "user_id"
        },

        fullName: {
            type: DataTypes.STRING(100),
            field: "full_name",
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING(100),
            allowNull: false
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
}

