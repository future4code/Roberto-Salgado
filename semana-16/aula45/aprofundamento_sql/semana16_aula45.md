### Exercício 1
a) Remove a coluna *'salary'* da tabela.

b) Renomeia a coluna *'gender'* para *'sex'*.

c) Altera a definição da coluna *'gender'*. Continua sendo do tipo VARCHAR (string variável), mas agora com tamanho maior, de 255.

d) A query é:
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR (100);
```

### Exercício 2
a) A query é:
```sql
UPDATE Actor
	SET 
		name = "Moacyr Franco",
		birth_date = "1936-10-05"
	WHERE id = "003";
```

b) As queries são:
```sql
UPDATE Actor
	SET name = "JULIANA PÃES"
	WHERE name = "Juliana Paes";
  
UPDATE Actor
	SET name = "Juliana Paes"
	WHERE name = "JULIANA PÃES";
```

c) A query é:
```sql
UPDATE Actor
	SET 
		name = "Moacyr Franco",
		birth_date = "2020-02-10",
		salary = 600000,
		gender = "male"
	WHERE id = "005";
```

d) Esta query não gera erro. Mas, também, não tem nenhum efeito. Como não há nenhuma correspondência para os parâmetros de busca, nenhuma linha da tabela é alterada.

### Exercício3
a) A query é:
```sql
DELETE FROM Actor WHERE name="Fernanda Montenegro";
```

b) A query é:
```sql
DELETE FROM Actor 
	WHERE
		gender = 'male' AND salary > 1000000;
```

### Exercício 4
a) A query é:
```sql
SELECT MAX(salary) FROM Actor
```

b) A query é:
```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female"
```

c) A query é:
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```

d) A query é:
```sql
SELECT SUM(salary) FROM Actor
```

### Exercício 5
a) Esta query mostra uma contagem de todos as linhas da lista agrupadas pelos valores de uma das colunas.

b) A query é:
```sql
SELECT id, name FROM Actor
    ORDER BY name DESC;
```

c) A query é:
```sql
SELECT * FROM Actor
    ORDER BY salary;
```

d) A query é:
```sql
SELECT * FROM Actor
    ORDER BY salary DESC
    LIMIT 3;
```

e) A query é:
```sql
SELECT AVG(salary), gender FROM Actor
    GROUP BY gender;
```

### Exercício 6
a) A query é:
```sql
ALTER TABLE Movie ADD playing_limit_date DATE;
```

b) A query é:
```sql
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c) As queries são:
```sql
UPDATE Movie
	SET
		playing_limit_date = "2020-12-31"
	WHERE id = "001";

UPDATE Movie
	SET
		playing_limit_date = "2020-01-01"
	WHERE id = "002";
```

d) A query é:
```sql
DELETE FROM Movie WHERE id = "002"
```
Ao tentar atualizar os dados de uma linha que acabou de ser deletada, a query **UPDATE** não da erro. Mas não tem efeito e nenhuma linha é alterada, já que os valores de busca não teram nenhuma correspondência.

### Exercício 7
a) A query é:
```sql
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```

b) A query é:
```sql
SELECT AVG(rating) FROM Movie;
```

c) A query é:
```sql
SELECT COUNT(*) FROM Movie 
	WHERE 
	    playing_limit_date > CURDATE() AND
        release_date < CURDATE();
```

d) A query é:
```sql
SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();
```

e) A query é:
```sql
SELECT MAX(rating) FROM Movie;
```

f) A query é:
```sql
SELECT MIN(rating) FROM Movie;
```

### Exercício 8
a) A query é:
```sql
SELECT * FROM Movie ORDER BY title;
```

b) A query é:
```sql
SELECT * FROM Movie ORDER BY title  DESC LIMIT 5;
```

c) A query é:
```sql
SELECT * FROM Movie 
	WHERE 
		release_date < CURDATE() AND
        playing_limit_date > CURDATE()
	ORDER BY release_date DESC 
	LIMIT 3;
```

d) A query é:
```sql
SELECT * FROM Movie 
	ORDER BY rating DESC 
	LIMIT 3;
```