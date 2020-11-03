import { connection } from "..";
import { User } from "../types/User";

export const selectUsersPage = async (page: number): Promise<User[]> => {
  const resultPerPage: number = 5;
  const offset: number = resultPerPage * (page - 1);
  
  return await connection("aula48_exercicio")
    .select("id", "name", "email", "type")
    .limit(resultPerPage)
    .offset(offset);
}