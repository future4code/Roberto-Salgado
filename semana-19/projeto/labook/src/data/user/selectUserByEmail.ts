import { User } from "../../model/User"
import { connection } from "../connection"

export default async function selectUserByEmail(
  email: string
):Promise<User[] | []> {
  try {
    const result = await connection("labook_users")
      .select("*")
      .where({ email })
    
      return result
  } catch (error) {
    throw new Error(error.slqMessage || error.message)
  }
}

