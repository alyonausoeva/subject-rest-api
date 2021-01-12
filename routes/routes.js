const express = require("express");
const router = express.Router();
const roleRoutes = require("./role.routes");
const userRoutes = require("./user.routes");
const statisticsRoutes = require("./statistics.routes");
const taskRoutes = require("./task.routes");

router.use("/roles", roleRoutes);
router.use("/users", userRoutes);
router.use("/statistics", statisticsRoutes);
router.use("/tasks", taskRoutes);

module.exports = router;
