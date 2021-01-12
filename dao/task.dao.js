const Task = require("../models/Task");

var TaskDao = {
  findAll: findAll,
  findById: findById,
  deleteById: deleteById,
  create: create,
};

function findAll() {
  return Task.findAll();
}

function findById(id) {
  return Task.findByPk(id);
}
function deleteById(id) {
  return Task.destroy({ where: { id: id } });
}
function create(task) {
  const newTask = new Task(task);

  return newTask.save();
}

module.exports = TaskDao;
