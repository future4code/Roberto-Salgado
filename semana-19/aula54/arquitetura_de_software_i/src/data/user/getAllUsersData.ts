import { TABLE_NAME, User } from "../../types/types";
import { connection } from "../connection";

export default async function getAllUsersData(): Promise<User[]> {

  try {

    const result = await connection()
      .select("*")
      .from(TABLE_NAME.USER);

    return result;

  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }

}