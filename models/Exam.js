const Sequelize = require("sequelize");
const db = require("../config/db");

const Exam = db.define(
  "exam",
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

module.exports = Exam;
