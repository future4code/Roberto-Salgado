CREATE TABLE aula52_user_address (
	id VARCHAR(255) PRIMARY KEY,
  logradouro VARCHAR(255) NOT NULL,
  numero INT NOT NULL,
  complemento VARCHAR(8),
  bairro VARCHAR(40) NOT NULL,
  cidade VARCHAR(40) NOT NULL,
  estado CHAR(2) NOT NULL
);