import { connection } from ".."
import { User } from "../types/User";

export default async function selectUsersOrder(
  orderBy: string, orderType: string
):Promise<User[]> {
  return await connection("aula48_exercicio")
    .select("id", "name", "email", "type")
    .orderBy(orderBy, orderType);
}