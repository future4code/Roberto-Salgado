import { TABLE_NAME, User } from "../../types/types";
import { connection } from "../connection";

export default async function getUserByEmail(email: string): Promise<User> {

  try {

    const result = await connection
      .select("*")
      .from(TABLE_NAME.USER)
      .where({ email });

    if(!result[0]){
      throw new Error("Usuário não encontrado");
    }
    
    return result[0];

  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
  
}