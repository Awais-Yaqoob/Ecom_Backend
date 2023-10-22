const config = require('../config');
const {Sequelize} = require('sequelize');

const database  = new Sequelize(config.db);

database.authenticate().then(()=>{
    console.log("Database Connected");
}
).catch((err)=>{
    console.log(err)
})

module.exports = database;