-- Insert info into tables based on player input
-- Pre-populate with more data
INSERT INTO departments(department_name)
VALUES ("Si"),
("Extra");

INSERT INTO roles(title, salary, department_id)
VALUES ("Hi", 2, 1),
("Hi", 2, 1);


INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ("Malik", "Harris", 1, NULL ),
("Malik", "Harris", 1, 1 );
