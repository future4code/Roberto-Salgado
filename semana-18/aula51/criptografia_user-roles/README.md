# Semana 18 - aula 51: Criptografia e User Roles

## Exercício 1
### a.
- Round é o cost, ou custo, que é um valor numérico da complexidade (e, consequentemente, segurança) da criptografia.     
  - Quanto maior, maior o tempo de execução do algoritmo de criptografia.
  - A recomendação é utilizar o maior que conseguir para os equipamentos utilizados rodarem no tempo desejado.
  - Foi usado o valor de 12 por ser padrão na maioria das libs.
- Salt é uma string aleatória adicionada ao dado que está sendo criptografado para criar o hash.
### b.
```ts
import * as bcrypt from "bcryptjs";

export const hash = async (s: string): Promise<string> => {
  const rounds = Number(process.env.BCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  return bcrypt.hash(s, salt);
}
```
### c.
```ts
export const compare = async (
  s: string, hash: string
): Promise<boolean> => {
  return bcrypt.compare(s, hash)
}
```

## Exercício 2
### a.
- O cadastro deve ser modificado primeiro para os dados sensíveis (nesse caso a senha do usuário) irem criptografados para o banco de dados.
- O login irá comparar o dado inserido com o que está no banco de dados.
  - Se não estiver criptografado no banco de dados, ou estiver e o input não ser criptofado, essa comparação dará falso.
### b.
```ts
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

    const id = generateId();

    const hashPassword = await hash(password);

    await insertUser(id, email, hashPassword);

    const token = generateToken({
      id
    });

    res.status(201).send({message: "Registered successfully", token});
  } catch (error) {
    res.status(400).send({message: error.message});
  }
}
```
### c.
```ts
export default async function login(
  req: Request, res: Response
): Promise<void> {
  try {
    const {email, password} = req.body;

    let message = "Successfully logged"

    if (!email || !password) {
      res.statusCode = 406;
      message = "'email' and 'password' required";
      throw new Error(message);
   }

    const user = await selectUserByEmail(email);
    
    if (!user) {
      res.statusCode = 404;
      message = "User not found or incorrect password";
      throw new Error(message);
   }

    const passwordIsCorrect: boolean = await compare(password, user.password);

    if (!passwordIsCorrect) {
      res.statusCode = 404
      message = "User not found or incorrect password"
      throw new Error(message)
   }

    const token: string = generateToken({ id: user.id });

    res.status(200).send({message, token});
    
  } catch (error) {
    let { message } = error

    if(message === "Cannot read property 'id' of undefined"){
        message = "User not found or incorrect password"
        res.statusCode = 404
    }

    res.send({message})
  }
}
```
### d.
O endpoint _/user/profile_ não precisa ser alterado porque ele verifica o token, passado pelo signup ou login, para acessar as informações consultadas.

## Exercício 3
### a.
```sql
ALTER TABLE aula50_User ADD COLUMN role VARCHAR(255) DEFAULT "NORMAL" 
```
### b.
```ts
import * as jwt from "jsonwebtoken";
import { USER_ROLES } from "../data/insertUser";

export type AuthenticationData = {
  id: string,
  role: USER_ROLES
}

const expiresIn = "1min";

export function generateToken(input: AuthenticationData): string {
  return jwt.sign(
    {
      id: input.id,
      role: input.role
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
}

export function getTokenData(
  token: string
): AuthenticationData {
  return jwt.verify(
    token,
    process.env.JWT_KEY as string
  ) as AuthenticationData
}
```
### c.
```ts
export default async function signup(
  req: Request, res: Response
): Promise<void> {
  try {
    const {email, password, role} = req.body;

    if(!email || email.indexOf("@") === -1){
      throw new Error("Invalid email");
    }

    if(!password || password < 6){
      throw new Error("Invalid password");
    }

    const id = generateId();

    const hashPassword = await hash(password);

    await insertUser(id, email, hashPassword, role);

    const token = generateToken({ id, role });

    res.status(201).send({message: "Registered successfully", token});
  } catch (error) {
    res.status(400).send({message: error.message});
  }
}
```
### d.
```ts
export default async function login(
  req: Request, res: Response
): Promise<void> {
  try {
    const {email, password} = req.body;

    let message = "Successfully logged"

    if (!email || !password) {
      res.statusCode = 406;
      message = "'email' and 'password' required";
      throw new Error(message);
   }

    const user = await selectUserByEmail(email);
    
    if (!user) {
      res.statusCode = 404;
      message = "User not found or incorrect password";
      throw new Error(message);
   }

    const passwordIsCorrect: boolean = await compare(password, user.password);

    if (!passwordIsCorrect) {
      res.statusCode = 404
      message = "User not found or incorrect password"
      throw new Error(message)
   }

    const token: string = generateToken({ id: user.id, role: user.role });

    res.status(200).send({message, token});

  } catch (error) {
    let { message } = error

    if(message === "Cannot read property 'id' of undefined"){
        message = "User not found or incorrect password"
        res.statusCode = 404
    }

    res.send({message})
  }
}
```

## Exercício 4
### a.
```ts
export default async function getUserById(
  req: Request, res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;
   
    const authenticationData = getTokenData(token);

    if(authenticationData.role !== "NORMAL"){
      throw new Error("Only a normal user can access this functionality");
    }

    const user = await selectUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: authenticationData.role
    });
  } catch (error) {
    let { message } = error;

      if(
         message === "jwt must be provided" ||
         message === "invalid signature" ||
         message === "jwt expired"
      ){
         res.statusCode = 401;
         message = "Unauthorized";
      }

      res.send({message});
  }
}
```

## Exercício 5
### Função query:
```ts
import { connection } from "..";

export default async function deleteUser (id: string): Promise<any> {
  await connection("aula50_User")
    .delete()
    .where({ id });
}
```
### Função do endpoint:
```ts
export default async function removeUser (req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;

    const authenticationData = getTokenData(token);

    if (authenticationData.role !== "ADMIN") {
      throw new Error("Only a admin user can access this funcionality");
    }

    const id = req.params.id;

    await deleteUser(id);

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
}
```

## Exercício 6
```ts
export default async function getUserById(
  req: Request, res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;

    getTokenData(token);
	
    const id = req.params.id;

    const user = await selectUserById(id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role,
    });

  } catch (error) {
    let { message } = error;

    if(
      message === "jwt must be provided" ||
      message === "invalid signature" ||
      message === "jwt expired"
    ){
      res.statusCode = 401;
      message = "Unauthorized";
    }

    res.send({message});
  }
}
```