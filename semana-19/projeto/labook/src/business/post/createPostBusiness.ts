import insertPost from "../../data/post/insertPost";
import { CreatePostInput, InsertPostData } from "../../model/Post";
import { generateId } from "../../services/idGenerator";

export default async function createPostBusiness(
  input:CreatePostInput
):Promise<void> {
  try {
    
    const id: string = generateId();

    const data: InsertPostData = {
      id,
      ...input
    };

    await insertPost(data);

  } catch (error) {
    throw new Error(error.message);
  }
}