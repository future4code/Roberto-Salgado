import { TABLE_NAME, User } from "../../types/types";
import { connection } from "../connection";

export default async function insertUser (
  user: User
): Promise<void> {
  try {
    await connection
      .insert({
        id: user.id,
        email: user.email,
        name: user.name,
        password: user.password,
        role: user.role
      })
      .into(TABLE_NAME.USER);
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}