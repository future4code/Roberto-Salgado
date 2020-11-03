import { connection } from ".."
import { User } from "../types/User";

export default async function selectUsersByNameQuery(name: string):Promise<User[]> {
  return await connection("aula48_exercicio")
    .select("id", "name", "email", "type")
    .where("name", "LIKE", `%${name}%`);
}