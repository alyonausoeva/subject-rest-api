const User = require("../models/User");

var userDao = {
  findAll: findAll,
  findById: findById,
  deleteById: deleteById,
  create: create,
  update: update,
};

function findAll() {
  return User.findAll();
}

function findById(id) {
  return User.findByPk(id);
}
function deleteById(id) {
  return User.destroy({ where: { id: id } });
}
function create(user) {
  const newUser = new User(user);

  return newUser.save();
}
function update(user, id) {
  var updateUser = {
    role_id: user.role_id,
    email: user.email,
    name: user.name,
    surname: user.surname,
    password: user.password,
    school: user.school,
    city: user.city,
    timezone: user.timezone,
    description: user.description,
    is_vk_visible: user.is_vk_visible,
    is_email_visible: user.is_email_visible,
    is_test_pass_notifiable: user.is_test_pass_notifiable,
    is_test_review_notifiable: user.is_test_review_notifiable,
    is_new_qa_answer_notifiable: user.is_new_qa_answer_notifiable,
    is_new_applicant_answer_notifiable: user.is_new_applicant_answer_notifiable,

    is__error_report_processing_notifiable:
      user.is__error_report_processing_notifiable,
  };
  return User.update(updateUser, { where: { id: id } });
}
module.exports = userDao;
