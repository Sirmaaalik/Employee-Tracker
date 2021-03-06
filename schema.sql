DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE departments(
  id INTEGER auto_increment NOT NULL PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles(
  id INTEGER auto_increment NOT NULL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INTEGER,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees(
  id INTEGER auto_increment NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  manager_id INTEGER,
  FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (manager_id) REFERENCES employees(id)
);