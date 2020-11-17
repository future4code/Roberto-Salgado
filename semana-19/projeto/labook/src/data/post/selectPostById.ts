import { selectPostByIdResult } from "../../model/Post";
import { connection } from "../connection";

export default async function selectPostById(
  id:string
):Promise<selectPostByIdResult | []> {
  try {
    
    const result = await connection("labook_posts")
      .select("*")
      .where({ id });

    return result;

  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}