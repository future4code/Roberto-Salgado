import { connection } from ".."
import { User } from "../types/User";

export default async function selectAllUsers():Promise<User[]> {
  return await connection("aula48_exercicio")
    .select("id", "name", "email", "type");
}