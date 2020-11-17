import { InsertUserData } from "../../model/User";
import { connection } from "../connection";

export default async function insertUser(
  data:InsertUserData
):Promise<void> {
  try {

    await connection('labook_users')
      .insert({
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password
      });
      
  } catch (error) {
    throw new Error(error.sqlMessage || error.message)
  }
}