import { connection } from "..";
import { USER_ROLES } from "./insertUser";

export type User = {
  id: string,
  email: string,
  password: string,
  role: USER_ROLES
}

export default async function selectUserByEmail (
  email: string 
): Promise<User> {
  try {
    const result = await connection("aula50_User")
      .select("*")
      .where({ email });

    return {
      id: result[0].id,
      email: result[0].email,
      password: result[0].password,
      role: result[0].role
    };
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}