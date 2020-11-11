CREATE TABLE ToDoListUser (
		id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
);

SELECT * FROM ToDoListUser;

CREATE TABLE ToDoListTask (
		id INT AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    limit_date DATE NOT NULL,
    creator_user_id INT NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES ToDoListUser(id)
);

SELECT * FROM ToDoListTask;

CREATE TABLE ToDoListResponsibleUserTaskRelation (
		task_id INT,
    responsible_user_id INT,
    FOREIGN KEY (task_id) REFERENCES ToDoListTask(id),
    FOREIGN KEY (responsible_user_id) REFERENCES ToDoListUser(id)
);

SELECT * FROM ToDoListResponsibleUserTaskRelation;