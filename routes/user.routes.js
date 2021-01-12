const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.get("/", userController.findUsers);
router.get("/:id", userController.findUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
