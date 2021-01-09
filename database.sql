create TABLE person(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  surname VARCHAR(255)
)

create TABLE task(
  id SERIAL PRIMARY KEY,
  text VARCHAR(255),
  answer VARCHAR(255),
  person_id INTEGER,
  FOREIGN KEY (person_id) REFERENCES person (id)
)