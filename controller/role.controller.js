const roleDao = require("../dao/role.dao");
var roleController = {
  findRoles: findRoles,
  findRoleById: findRoleById,
};
function findRoles(req, res) {
  roleDao
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
function findRoleById(req, res) {
  roleDao
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = roleController;
