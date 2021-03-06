DROP DATABASE IF EXISTS eetracker_db;
CREATE database eetracker_db;

USE eetracker_db;

CREATE TABLE role (
    id INT AUTO_INCREMENT primary key NOT NULL,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT(10)
);

CREATE TABLE department (
    id INT AUTO_INCREMENT primary key NOT NULL,
    name VARCHAR(30),
    department_id INT(10)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT primary key NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT(10),
    manager_id INT(10) NULL
);
