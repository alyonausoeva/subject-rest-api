const examDao = require("../dao/exam.dao");
var examController = {
  findExam: findExam,
  findExamById: findExamById,
  createExam: createExam,
  deleteExam: deleteExam,
};

function findExam(req, res) {
  examDao
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
function findExamById(req, res) {
  examDao
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
function createExam(req, res) {
  let exam = req.body;

  examDao
    .create(exam)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteExam(req, res) {
  examDao
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

module.exports = examController;
