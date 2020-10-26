### Exercício 1
a) O **CREATE TABLE** vai criar uma tabela com os nomes de cada coluna e a tipagem dos dados de cada uma. O **VARCHAR(n)** para declarar strings com a quantidade *'n'* de caractéres. O **DATE** para declarar uma data no formato *YYYY-MM-AA*. **PRIMARY KEY** quer dizer que esta coluna será o dado único(id) para identificar cada item da table. **NOT NULL** quer dizer os dados para esta coluna não podem ser *vazios*. 

b) O comando **SHOW DATABASES** retorna os meus banco de dados e o comando **SHOW TABLES** retorna as tabelas que criei neste banco de dados.

c) O comando **DESCRIBE Actor** exibe os detalhes desta tabela, como o nome, tipagem e restrições definidas para cada coluna.

### Exercício 2
a) A query é:
```
INSERT INTO Actor (id, name, salary, birth_date)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b) Esta query deu erro porque não é possível inserir linhas com a mesma PK em uma tabela.

c) Aqui deu erro porque a quantidade de colunas não corresponde a quantidade de valores declarados na linha 1 da query.
A query correta é:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) O erro aqui é porque a tabela foi definida com a coluna 'name' como campo obrigatório, e não foi definido um valor padrão caso ela esteja vazia.
A query correta é:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

e) Aqui o erro é o valor da data de nascimento que não está entre aspas, então, a query entende como uma expressão matemática e subtrai 3 e 26 de 1979, retornando o número 1950.
A query correta é:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

### Exercício3
a) A query é:
```
SELECT * FROM Actor WHERE gender = "female";
```

b) A query é:
```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

c) A query é:
```
SELECT * FROM Actor WHERE name = "invalid";
```
O resultado foi de nenhuma linha retornada porque nenhuma linha tem este valor para a coluna gender.

d) A query é:
```
SELECT id, name, salary FROM Actor WHERE salary < 500000;
```

e) O erro aconteceu porque foi pedida a coluna *'nome'* na query, mas o nome correto desta coluna é **name**.
A query correta é:
```
SELECT id, name from Actor WHERE id = "002";
```

### Exercício 4
a) Busca todos os dados da tabela *"Actor"* das linhas que tiverem o valor na coluna *'name'* comçenado com *'A'* **OU** *'J'*, **E** que o valor na coluna salário seja maior que 300000.

b) A query é:
```
SELECT * from Actor 
	WHERE name NOT LIKE "A%" AND salary > 350000;
```

c) A query é:
```
SELECT * from Actor 
	WHERE name LIKE "%G%" OR name LIKE "%g%";
```

d) A query é:
```
SELECT * FROM Actor
	WHERE 
		(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") 
		AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5
a) A query é:
```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```
Esta query cria a tabela de Filmes com as informações id, nome, sinopse, data de lançamento e avaliação, e seus respectivos tipos VARCHAR(255), VARCHAR(255), TEXT, DATE e INT.
O tipo **TEXT** é designado para o armazenamento de alta-capacidade de caractéres. Ele tem quatro variações: TINYTEXT, TEXT, MEDIUMTEXT e LONGTEXT. A diferença é a quantidade máxima de dados que cada um pode armazenar.

b) A query é:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
    "2006-01-06",
    7
);
```

c) A query é:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
    "2012-12-27",
    10
);
```

d) A query é:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

e) A query é:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Estômago",
    "Raimundo Nonato é um migrante nordestino que chega à cidade grande em busca de oportunidade. Aprende a profissão de cozinheiro, na qual se desenvolve e recebe uma melhor oportunidade de trabalho. Sua vida se complica ao se envolver com a prostituta Iria. O filme se passa entre o tempo atual na cadeia e a vida de Nonato no restaurante.",
    "2003-01-31",
    10
);
```

### Exercício 6
a) A query é:
```
SELECT id, title, rating FROM Movie WHERE id = "004";
```

b) A query é:
```
SELECT * FROM Movie WHERE title = "Estômago";
```

c) A query é:
```
SELECT id, title, synopsis FROM Movie WHERE rating > 7;
```

### Exercício 7
a) A query é:
```
SELECT * FROM Movie
	WHERE title LIKE "%vida%";
```

b) A query é:
```
SELECT * FROM Movie
	WHERE title LIKE "%vida%" OR
	synopsis LIKE "%vida%";
```

c) A query é:
```
SELECT * FROM Movie
	WHERE release_date < "2020-10-26";
```

d) A query é:
```
SELECT * FROM MOVIE
	WHERE 
		release_date < "2020-10-26" AND 
		(title LIKE "%vida%" OR synopsis LIKE "%vida%") AND 
        rating > 7;
```