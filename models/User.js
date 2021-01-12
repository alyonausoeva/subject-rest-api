const Sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role_id: {
      type: Sequelize.INTEGER,
    },

    email: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    surname: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    school: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    timezone: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    is_vk_visible: {
      type: Sequelize.BOOLEAN,
    },
    is_email_visible: {
      type: Sequelize.BOOLEAN,
    },
    is_test_pass_notifiable: {
      type: Sequelize.BOOLEAN,
    },
    is_test_review_notifiable: {
      type: Sequelize.BOOLEAN,
    },
    is_new_qa_answer_notifiable: {
      type: Sequelize.BOOLEAN,
    },
    is_new_applicant_answer_notifiable: {
      type: Sequelize.BOOLEAN,
    },
    is__error_report_processing_notifiable: {
      type: Sequelize.BOOLEAN,
    },
  },
  { timestamps: false }
);

module.exports = User;
