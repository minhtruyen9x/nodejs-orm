const { Sequelize } = require('sequelize')



const sequelize = new Sequelize('app_food', 'root', '1234', {
    dialect: "mysql",
    host: "localhost",
    port: 3306
})

sequelize.authenticate()
    .then(() => {
        console.log("Connect to database successful")
    })
    .catch((error) => {
        console.log("Fail to connect database ")
        throw error
    });



module.exports = sequelize
