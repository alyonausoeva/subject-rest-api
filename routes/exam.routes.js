const express = require("express");
const router = express.Router();
const examController = require("../controller/exam.controller");

router.get("/", examController.findExam);
router.get("/:id", examController.findExamById);
router.post("/", examController.createExam);
router.delete("/:id", examController.deleteExam);

module.exports = router;
