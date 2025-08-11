// src/config/sequelize.js
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT || 3306,
    dialect: "mysql",
    logging: null, // flip on if you want to see SQL
    pool: { max: 5, min: 0, idle: 10_000 },
    define: {
      underscored: true, // snake_case db columns
      freezeTableName: true // keep table names as-is
    }
  }
);

async function init() {
  await sequelize.authenticate();
  // Automatically create / update tables without nuking data
  await sequelize.sync({ alter: true, force: false });
}

module.exports = { sequelize, init };
