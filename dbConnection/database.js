const Sequelize = require("sequelize");

const sequelize = new Sequelize("circketdb", "root", "junaid0000", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
