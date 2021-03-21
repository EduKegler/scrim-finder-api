CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE sections (
  id SERIAL PRIMARY KEY,
  user_id int NOT NULL,
  expire_date TIMESTAMP NOT NULL
);

CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  owner_id INT NOT NULL
);

CREATE TABLE matches (
  id SERIAL PRIMARY KEY,
  home_team VARCHAR(255) NOT NULL,
  visitor_team VARCHAR(255) NOT NULL,
  created_by INT NOT NULL
);

INSERT INTO users (username, password) VALUES ('harry', 'varinha');
INSERT INTO sections (user_id, expire_date) VALUES (1, '2022-03-21 15:37:20');
INSERT INTO teams (name, owner_id) VALUES ('HP Team 1', 1);
INSERT INTO teams (name, owner_id) VALUES ('HP Team 2', 1);
INSERT INTO matches (home_team, visitor_team, created_by) VALUES (1, 2, 1);