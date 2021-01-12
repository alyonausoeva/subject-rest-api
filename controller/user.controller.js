const userDao = require("../dao/user.dao");
var userController = {
  findUsers: findUsers,
  findUserById: findUserById,
  createUser: createUser,
  deleteUser: deleteUser,
  updateUser: updateUser,
};
function findUsers(req, res) {
  userDao
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
function findUserById(req, res) {
  userDao
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
function createUser(req, res) {
  let user = req.body;

  userDao
    .create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteUser(req, res) {
  userDao
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "User deleted successfully",
        user: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
function updateUser(req, res) {
  userDao
    .update(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "User updated successfully",
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
module.exports = userController;
