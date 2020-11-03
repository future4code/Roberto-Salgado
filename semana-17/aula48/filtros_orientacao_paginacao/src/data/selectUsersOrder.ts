import { connection } from ".."
import { User } from "../types/User";

export const selectUsersOrder = async (
  orderBy: string, orderType: string
): Promise<User[]> => {
  return await connection("aula48_exercicio")
    .select("id", "name", "email", "type")
    .orderBy(orderBy, orderType);
}