# Semana 18 - aula 50: Introdução a Autenticação

## Exercício 1
### a.
Sim. É melhor usar strings para o id porque te dá mais opções de caractéres e maior aleatoridade.
### b.
```ts
import { v4 } from "uuid";

export function generateId(): string {
  return v4();
}
```

## Exercício 2
### a.
Com a lib knex cria uma conexão com um banco de dados MySQL e com um função que recebe id, email e um password como argumentos, insere estes dados na tabela com o nome que anteriormente foi declarado como valor de uma variável.
### b.
```sql
CREATE TABLE User (
  id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
```
### c.
```ts
export const insertUser = async (
  id: string, 
  email: string, 
  password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into("aula50_User");
};
```

## Exercício 3
### a.
Porque o jwt.sign() espera como argumento para a chave secreta uma string e como o valor que recebemos do .env pode ser de qualquer tipo precisamos definir que ele assumirá o tipo de string.
### b.
```ts
import * as jwt from "jsonwebtoken";

export type AuthenticationData = {
  id: string,
}

const expiresIn = "1min";

export function generateToken(input: AuthenticationData): string {
  return jwt.sign(
    {
      id: input.id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
}
```

## Exercício 4
```ts
import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";

export default async function signup(
  req: Request, res: Response
): Promise<void> {
  try {
    const {email, password} = req.body;

    if(!email || email.indexOf("@") === -1){
      throw new Error("Invalid email");
    }

    if(!password || password < 6){
      throw new Error("Invalid password");
    }

    const userData = {
      email, password
    };

    const id = generateId();

    await insertUser(id, userData.email, userData.password);

    const token = generateToken({
      id
    });

    res.status(201).send({token});
  } catch (error) {
    res.status(400).send({message: error.message});
  }
}
```

## Exercício 5
```ts
export default async function getUserByEmail (
  email: string 
): Promise<any> {
  return (
    await connection
      .select("*")
      .from("aula50_User")
      .where({email})
  )[0];
};
```

### Exercício 6
```ts
import { Request, Response } from "express";
import getUserByEmail from "../data/getUserByEmail";
import { generateToken } from "../services/authenticator";

export default async function login(
  req: Request, res: Response
): Promise<void> {
  try {
    const {email, password} = req.body;

    if(!email || email.indexOf("@") === -1){
      throw new Error("Invalid email");
    }

    const userData = {
      email, password
    };

    const user = await getUserByEmail(userData.email);

    if(user.password !== userData.password){
      throw new Error("Invalid password")
    }

    const token = generateToken({
      id: user.id
    });

    res.status(200).send({token});
  } catch (error) {
    res.status(400).send({message: error.message});
  }
}
```

### Exercício 7
### a.
Precisamos definir que o retorno do jwt.verify() possa ser de qualquer tipo, no caso de não sabermos o que será retornado da decodificação do valor chamado.
### b.
```ts
export function getTokenData(token: string): AuthenticationData {
  return jwt.verify(
    token,
    process.env.JWT_KEY as string
  ) as AuthenticationData;
}
```

### Exercício 8
### a.
```ts
import { connection } from "..";

export default async function getUserById(id: string): Promise<any> {
  return (
    await connection
      .select("*")
      .from("aula50_User")
      .where({ id })
  )[0];
}
```
### b.
```ts
export default async function getUserById(
  req: Request, res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;
   
    const authenticationData = getTokenData(token);

    const user = await selectUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    let { message } = error;

      if(
         message === "jwt must be provided" ||
         message === "invalid signature" ||
         message === "jwt expired"
      ){
         res.statusCode = 401;
         message = "Não autorizado";
      }

      res.send({message});
  }
}
```