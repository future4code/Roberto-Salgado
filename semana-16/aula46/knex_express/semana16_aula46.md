### Exercício 1
a) Quando usamos o raw ele devolve um array com o resultado da query e outras informações. A informação que queremos é apenas a resposta da query. Então, escrevemos a função para retornar apenas os dados que estão no índice *zero*, a primeira posição, do array resposta.

b) A query é:
```tsx
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name LIKE "%${name}%"
  `)
  return result[0]
}
```

c) A query é:
```tsx
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  return result[0][0].count;
};
```

### Exercício 2
a) A query é:
```tsx
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({salary})
    .where("id", id);
};
```

b) A query é:
```tsx
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
};
```

c) A query é:
```tsx
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};
```