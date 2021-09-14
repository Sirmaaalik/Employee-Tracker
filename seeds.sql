-- Insert info into tables based on player input
-- Pre-populate with more data
INSERT INTO departments(department_name)
VALUES ("Si"),
("Extra");

INSERT INTO roles(title, salary, department_id)
VALUES ("Management", 90000, 1),
("Mapping", 70000, 2);


INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ("Malik", "Harris", 1, null ),
("Xavier", "Harris", 2, null );
