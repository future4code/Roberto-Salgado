import { InsertPostData } from "../../model/Post";
import { connection } from "../connection";

export default async function insertPost(
  data:InsertPostData
):Promise<void> {
  try {
    
    await connection("labook_posts")
      .insert({
        id: data.id,
        photo: data.photo,
        description: data.description,
        type: data.type,
        author_id: data.authorId
      });

  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}