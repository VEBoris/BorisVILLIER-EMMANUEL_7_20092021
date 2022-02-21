// Include Sequelize module
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'groupomania',
    'root',
    'Visama03$', {
  
        dialect: 'mysql',
             
        host: 'localhost',
    }
);
  
module.exports = sequelize;