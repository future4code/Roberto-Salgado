import { Post, PostData, POST_TYPES } from "../model/Post";
import BaseDatabase from "./BaseDatabase";
import UserDatabase from "./UserDatabase";

class PostDatabase extends BaseDatabase {

  private static tableName: string = "labook_posts";

  public getTableName = ():string => PostDatabase.tableName;

  public async createPost(
    post:Post
  ):Promise<void> {
    try {
      
      await BaseDatabase
        .connection(PostDatabase.tableName)
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
  ):Promise<Array<PostData>> {
    try {
      
      const result: PostData[] = await BaseDatabase
        .connection(PostDatabase.tableName)
        .select("*")
        .where({ id });
  
      return result;
  
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getFeed(
    id:string
  ):Promise<Array<PostData>> {
    try {
      
      const query1: PostData[] = await BaseDatabase
        .connection(`${PostDatabase.tableName} as p`)
        .leftJoin(
          `${UserDatabase.getFriendsTableName()} as uf`,
          'p.author_id',
          'uf.user_two_id'
        )
        .select('p*')
        .where('uf.user_one_id', id);
      
      const query2: PostData[] = await BaseDatabase
        .connection(`${PostDatabase.tableName} as p`)
        .leftJoin(
          `${UserDatabase.getFriendsTableName()} as uf`,
          'p.author_id',
          'uf.user_one_id'
        )
        .select('p*')
        .where('uf.user_two_id', id);

      const result: PostData[] = [...query1, ...query2];
      
      return result;

    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getPostByType(
    type: POST_TYPES
  ):Promise<Array<PostData>> {
    try {
      
      const result: PostData[] = await BaseDatabase
        .connection(PostDatabase.tableName)
        .select('*')
        .where({ type });

      return result

    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}

export default new PostDatabase();