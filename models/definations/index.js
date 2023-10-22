let sequelize = require('../../common/dbConnection');


const db = {}
db.sequelize = sequelize;
module.exports = {db}