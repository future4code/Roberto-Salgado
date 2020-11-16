import { TABLE_NAME } from "../../types/types";
import { connection } from "../connection";

export default async function deleteUserData(
  id: string
): Promise<void> {
  try {
    await connection
      .where({ id })
      .from(TABLE_NAME.USER)
      .del()
      
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}