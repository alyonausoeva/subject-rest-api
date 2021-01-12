const express = require("express");
const router = express.Router();
const taskController = require("../controller/task.controller");

router.get("/", taskController.findTask);
router.get("/:id", taskController.findTaskById);
router.post("/", taskController.createTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
