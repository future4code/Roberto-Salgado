CREATE TABLE cookenu_users (
	id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  email VARCHAR(80) NOT NULL UNIQUE,
  role ENUM("ADMIN", "NORMAL"),
  password VARCHAR(255) NOT NULL
);

CREATE TABLE cookenu_recipes (
	id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(40) NOT NULL,
  description TEXT NOT NULL,
	created_at DATETIME NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES cookenu_users(id)
);