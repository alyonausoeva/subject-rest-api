create TABLE users(
  id SERIAL PRIMARY KEY,
  role_id BIGINT,
  FOREIGN KEY (role_id)  REFERENCES roles (id),
  email VARCHAR(255),
  name VARCHAR(255),
  surname VARCHAR(255),
  password VARCHAR(255),
  city VARCHAR(255),
  school VARCHAR(255),
  timezone VARCHAR(255),
  description VARCHAR(255),
  is_vk_visible BOOLEAN,
  is_email_visible BOOLEAN,
  is_test_pass_notifiable BOOLEAN,
  is_test_review_notifiable BOOLEAN,
  is_new_qa_answer_notifiable BOOLEAN,
  is_new_applicant_answer_notifiable BOOLEAN,
  is__error_report_processing_notifiable BOOLEAN
)


create TABLE roles(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255)
)

create TABLE exames(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255)
)

create TABLE tasks(
  id SERIAL PRIMARY KEY,
  exam_id BIGINT,
  FOREIGN KEY (exam_id)  REFERENCES exames (id),
  issue VARCHAR(255),
  text TEXT,
  answer VARCHAR(255),
  solution TEXT,
  source VARCHAR(255),
  area VARCHAR(255)
)

create TABLE statistics(
  id SERIAL PRIMARY KEY,
  user_id BIGINT,
  FOREIGN KEY (user_id)  REFERENCES users (id),
  task_id BIGINT,
  FOREIGN KEY (task_id)  REFERENCES tasks (id),
  answer VARCHAR(255),
  correctness BOOLEAN
)