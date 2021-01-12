const Exam = require("../models/Exam");

var ExamDao = {
  findAll: findAll,
  findById: findById,
  deleteById: deleteById,
  create: create,
};

function findAll() {
  returnExam.findAll();
}

function findById(id) {
  return Exam.findByPk(id);
}
function deleteById(id) {
  return Exam.destroy({ where: { id: id } });
}
function create(task) {
  const newExam = new Exam(task);

  return newExam.save();
}

module.exports = ExamDao;
