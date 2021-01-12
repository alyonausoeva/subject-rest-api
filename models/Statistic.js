const Sequelize = require("sequelize");
const db = require("../config/db");

const Statistics = db.define(
  "statistics",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },

    task_id: {
      type: Sequelize.INTEGER,
    },
    answer: {
      type: Sequelize.STRING,
    },
    correctness: {
      type: Sequelize.BOOLEAN,
    },
  },
  { timestamps: false }
);

module.exports = Statistics;
