const Statistics = require("../models/Statistics");

var StatisticsDao = {
  findAll: findAll,
  findById: findById,
  deleteById: deleteById,
  create: create,
};

function findAll() {
  return Statistics.findAll();
}

function findById(id) {
  return Statistics.findByPk(id);
}
function deleteById(id) {
  return Statistics.destroy({ where: { id: id } });
}
function create(statistics) {
  const newStatistics = new Statistics(statistics);

  return newStatistics.save();
}

module.exports = StatisticsDao;
