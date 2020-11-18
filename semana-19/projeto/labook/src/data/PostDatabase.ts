import { Post, PostData } from "../model/Post";
import { connection } from "./connection";

class PostDatabase {

  private tableName: string = "labook_posts";

  public getTableName = ():string => this.tableName;

  public async createPost(
    post:Post
  ):Promise<void> {
    try {
      
      await connection(this.tableName)
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
      
      const result = await connection("labook_posts")
        .select("*")
        .where({ id });
  
      return result;
  
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}

export default new PostDatabase();