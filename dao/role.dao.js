const Role = require("../models/Role");

var roleDao = {
  findAll: findAll,
  findById: findById,
};

function findAll() {
  return Role.findAll();
}

function findById(id) {
  return Role.findByPk(id);
}

module.exports = roleDao;
