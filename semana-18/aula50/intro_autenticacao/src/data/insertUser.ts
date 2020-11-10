import { connection } from "..";

export default async function insertUser (
  id: string, 
  email: string, 
  password: string
): Promise<void> {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into("aula50_User");
};