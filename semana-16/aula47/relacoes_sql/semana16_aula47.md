### Exercício 1
a) Uma *chave estrangeira* é um campo, que aponta para a **chave primária** de outra. Ou seja, passa a existir uma **relação entre duas tabelas**. *Chave estrangeira* sempre deve referenciar a **chave primária** da outra tabela.
#
b) Exemplo de uma query de avaliação:
```sql
INSERT INTO Rating (id, comment, rate, movie_id) 
  VALUES (
    "004",
    "Um dos meus filmes nacionais favoritos.",
    10,
    "004"
  );
```
#
c) Não é possível adicionar ou atualizar uma linha em uma tabela filha. Há uma restrição da chave estrangeira referenciando valores que não existem na tabela referenciada.
#
d) A query é:
```sql
ALTER TABLE Movie DROP COLUMN rating;
```
#
e) Não é possível deletar linhas da tabela pai. Há uma restrição da chave estrangeira que impede a alteração se os dados da tabela forem referenciados em outra tabela.
#
### Exercício 2

a) Esta tabela foi criada com apenas dois valores, que são chaves estrangeiras que referenciam a outras duas tabelas. Ela serve como tabela de intersecção e tem a função de relacionar estas duas tabelas.
#
b) Exemplo de uma query de criação de relação entre a tabela Actor e a tabela Movie:
```sql
INSERT INTO MovieCast(movie_id, actor_id)
  VALUES(
    "010",
    "009"
  );
```
#
c) Não é possível adicionar ou atualizar uma linha em uma tabela filha. Há uma restrição da chave estrangeira referenciando valores que não existem na tabela referenciada.
#
d) Não é possível deletar linhas da tabela pai. Há uma restrição da chave estrangeira que impede a alteração se os dados da tabela forem referenciados em outra tabela.
#
### Exercício 3
a) Esta query faz a junção de dados entre tabelas. Ela exibe a entidade **Movie** unidas aos dados da entidade **Rating** em que a *chave primária* da primeira corresponda com a *chave estrangeira* da segunda. O operador **ON** é a condição de união que relaciona as duas tabelas. Assim, só serão retornados registros relacionados nas duas tabelas. Sem o operador *ON* serão retornados combinações de todos os itens das duas tabelas.
#
b) A query é:
```sql
SELECT 
  m.id as movie_id,
  m.title as movie_title,
  r.rate as rating 
FROM Movie m
JOIN Rating r ON m.id = r.movie_id;
```
#
### Exercício 4
a) A query é:
```sql
SELECT 
  m.id as movie_id, 
  m.title as movie_title, 
  r.rate as rating, 
  r.comment as rating_comment
FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
ORDER BY movie_id;
```
#
b) A query é:
```sql
SELECT 
  m.id as movie_id, 
  m.title, mc.actor_id
FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id
ORDER BY actor_id;
```
#
c) A query é:
```sql
SELECT 
  AVG(r.rate) as average_rating, 
  m.id, 
  m.title 
FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```
#
### Exercício 5
a) Porque a tabela de junção contêm apenas as chaves estrangeiras que relacionam as duas tabelas que contêm, de fato, os dados. Assim, para mostrar os dados que estão relacionados entre as duas tabelas, fazemos a união de uma tabela com a tabela de junção e da tabela gerada unimos novamente com o a outra tabela.

b) A query é:
```sql
SELECT 
  m.id as movie_id, 
  m.title as movie_title, 
  a.id as actor_id, 
  a.name as actor_name
FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id
ORDER BY movie_id;
```

c) Esta query retorna as colunas id e o título do filme e o id e nome do ator da tabela gerada a partir da junção da tabela de filmes com os ids correspondentes na tabela de intersecção do enredo e da junção desta tabela com a de atores.

d) A query é:
```sql
SELECT 
  m.id as movie_id, 
	m.title as movie_title, 
	a.id as actor_id, 
	a.name as actor_name,
	r.rate as rating, 
	r.comment as comment
FROM Movie m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id
ORDER BY movie_id;
```

