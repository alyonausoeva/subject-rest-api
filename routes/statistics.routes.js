const express = require("express");
const router = express.Router();
const statisticsController = require("../controller/statistics.controller");

router.get("/", statisticsController.findStatistics);
router.get("/:id", statisticsController.findStatisticsById);
router.post("/", statisticsController.createStatistics);
router.delete("/:id", statisticsController.deleteStatistics);

module.exports = router;
