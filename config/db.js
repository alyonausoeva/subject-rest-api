const { Sequelize } = require("sequelize");
const db = new Sequelize("sdamgia", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = db;
