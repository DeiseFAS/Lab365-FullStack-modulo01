const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  "M1S08Ex5",
  "postgres",
  "*****",
  {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
  }
);

module.exports = sequelize;