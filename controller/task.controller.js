const db = require("../db");

class TaskController {
  async createTask(req, res) {
    const { text, answer, person_id } = req.body;
    const newTask = await db.query(
      `INSERT INTO task (text, answer, person_id) values ($1, $2, $3) RETURNING *`,
      [text, answer, person_id]
    );
    res.json(newTask.rows[0]);
  }
  async getTasksbyPerson(req, res) {
    const id = req.query.id;
    const tasks = await db.query(`SELECT * FROM task WHERE person_id = $1`, [
      id,
    ]);
    res.json(tasks.rows);
  }
}

module.exports = new TaskController();
