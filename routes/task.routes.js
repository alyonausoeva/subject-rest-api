const Router = require("express");
const router = new Router();
const taskController = require("../controller/task.controller");

router.post("/task", taskController.createTask);
router.get("/task", taskController.getTasksbyPerson);

module.exports = router;
