const Sequelize = require("sequelize");
const db = require("../config/db");

const Role = db.define(
  "role",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: false }
);

module.exports = Role;
