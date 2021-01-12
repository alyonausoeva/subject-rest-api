const Sequelize = require("sequelize");
const db = require("../config/db");

const Task = db.define(
  "task",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    exam_id: {
      type: Sequelize.INTEGER,
    },

    issue: {
      type: Sequelize.STRING,
    },
    text: {
      type: Sequelize.STRING,
    },
    answer: {
      type: Sequelize.STRING,
    },
    solution: {
      type: Sequelize.STRING,
    },
    source: {
      type: Sequelize.STRING,
    },
    area: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: false }
);

module.exports = Task;
