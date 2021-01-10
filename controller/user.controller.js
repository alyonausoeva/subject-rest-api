const db = require("../db");

class UserController {
  async createUser(req, res) {
    const {
      role_id,
      email,
      name,
      surname,
      password,
      city,
      school,
      timezone,
      description,
      is_vk_visible,
      is_email_visible,
      is_test_pass_notifiable,
      is_test_review_notifiable,
      is_new_qa_answer_notifiable,
      is_new_applicant_answer_notifiable,
      is__error_report_processing_notifiable,
    } = req.body;
    const newUser = await db.query(
      `INSERT INTO users (role_id, email, name, surname, password, city, school, timezone, description, is_vk_visible, is_email_visible, is_test_pass_notifiable, is_test_review_notifiable, is_new_qa_answer_notifiable, is_new_applicant_answer_notifiable, is__error_report_processing_notifiable) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *`,
      [
        role_id,
        email,
        name,
        surname,
        password,
        city,
        school,
        timezone,
        description,
        is_vk_visible,
        is_email_visible,
        is_test_pass_notifiable,
        is_test_review_notifiable,
        is_new_qa_answer_notifiable,
        is_new_applicant_answer_notifiable,
        is__error_report_processing_notifiable,
      ]
    );
    res.json(newUser.rows);
  }
  async getUsers(req, res) {
    const users = await db.query(`SELECT * FROM users`);
    res.json(users.rows);
  }
  async getOneUser(req, res) {
    const id = req.params.id;
    const user = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
    res.json(user.rows);
  }
  async updateUser(req, res) {
    const { id, name, surname } = req.body;
    const user = await db.query(
      `UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`,
      [name, surname, id]
    );
    res.json(user.rows);
  }
  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query(`DELETE FROM users WHERE id = $1`, [id]);
    res.json(user.rows);
  }
}

module.exports = new UserController();
