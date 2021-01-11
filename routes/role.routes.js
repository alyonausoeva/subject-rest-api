const express = require("express");
const router = express.Router();
const roleController = require("../controller/role.controller");

router.get("/", roleController.findRoles);
router.get("/:id", roleController.findRoleById);

module.exports = router;
