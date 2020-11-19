import { Post, PostData } from "../model/Post";
import BaseDatabase from "./BaseDatabase";

class PostDatabase extends BaseDatabase {

  private static tableName: string = "labook_posts";

  public getTableName = ():string => PostDatabase.tableName;

  public async createPost(
    post:Post
  ):Promise<void> {
    try {
      
      await BaseDatabase.connection(PostDatabase.tableName)
        .insert({
          id: post.getId(),
          photo: post.getPhoto(),
          description: post.getDescription(),
          type: post.getType(),
          author_id: post.getAuthorId()
        });
  
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getPostById(
    id:string
  ):Promise<PostData | []> {
    try {
      
      const result = await BaseDatabase.connection(PostDatabase.tableName)
        .select("*")
        .where({ id });
  
      return result;
  
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}

export default new PostDatabase();