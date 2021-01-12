const statisticsDao = require("../dao/statistics.dao");
var statisticsController = {
  findStatistics: findStatistics,
  findStatisticsById: findStatisticsById,
  createStatistics: createStatistics,
  deleteStatistics: deleteStatistics,
};
function findStatistics(req, res) {
  statisticsDao
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
function findStatisticsById(req, res) {
  userDao
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
function createStatistics(req, res) {
  let statistics = req.body;

  statisticsDao
    .create(statistics)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteStatistics(req, res) {
  statisticsDao
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Statistics deleted successfully",
        user: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = statisticsController;
