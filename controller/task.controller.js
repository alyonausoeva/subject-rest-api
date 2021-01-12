const taskDao = require("../dao/task.dao");
var taskController = {
  findTask: findTask,
  findTaskById: findTaskById,
  createTask: createTask,
  deleteTask: deleteTask,
};

function findTask(req, res) {
  taskDao
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
function findTaskById(req, res) {
  taskDao
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
function createTask(req, res) {
  let task = req.body;

  taskDao
    .create(task)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteTask(req, res) {
  taskDao
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Task deleted successfully",
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = taskController;
