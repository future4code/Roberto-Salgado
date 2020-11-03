import { connection } from ".."
import { inputData, User } from "../types/User"

export const filterUsers = async (data: inputData): Promise<User[]> => {
  const resultPerPage: number = 5;
  const offset: number = resultPerPage * (data.page - 1);

  return await connection("aula48_exercicio")
    .select("id", "name", "email", "type")
    .where("name", "LIKE", `%${data.name}%`)
    .where("type", "LIKE", `${data.type}`)
    .orderBy(data.orderBy, data.orderType)
    .limit(resultPerPage)
    .offset(offset);
}