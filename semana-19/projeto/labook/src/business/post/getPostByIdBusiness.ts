import selectPostById from "../../data/post/selectPostById";
import { Post, selectPostByIdResult } from "../../model/Post";

export default async function getPostByIdBusiness(
  id:string
):Promise<Post> {
  try {
    
    const queryResult: selectPostByIdResult | [] = await selectPostById(id);

    if (!queryResult[0]) {
      throw new Error("Post not found");
    }

    const post: Post = {
      id: queryResult[0].id,
      photo: queryResult[0].photo,
      description: queryResult[0].description,
      type: queryResult[0].type,
      createdAt: queryResult[0].created_at,
      authorId: queryResult[0].author_id,
   };

   return post

  } catch (error) {
    throw new Error(error.message);
  }
}