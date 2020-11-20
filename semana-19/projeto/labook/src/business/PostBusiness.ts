import PostDatabase from "../data/PostDatabase";
import { CreatePostInput, Post, PostData } from "../model/Post";
import idGenerator from "../services/idGenerator";

class PostBusiness {

  public async createPost(
    input:CreatePostInput
  ):Promise<void> {
    try {

      const { photo, description, type, authorId } = input;

      if (!photo || !description) {
        throw new Error("'photo' and 'description' must be provided");
      }
      
      const id: string = idGenerator.generateId();
  
      const newPost: Post = new Post(
        id,
        photo,
        description,
        type,
        authorId
      )
  
      await PostDatabase.createPost(newPost);
  
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async getPostById(
    id:string
  ):Promise<Post> {
    try {
      
      const queryResult: PostData[] | [] = await PostDatabase.getPostById(id);
  
      if (!queryResult[0]) {
        throw new Error("Post not found");
      }
  
      const post: Post = new Post(
        queryResult[0].id,
        queryResult[0].photo,
        queryResult[0].description,
        queryResult[0].type,
        queryResult[0].author_id,
        queryResult[0].created_at
      );
  
     return post;
  
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async getFeed(
    id:string
  ):Promise<Array<Post>> {
    try {
      
      const queryResult: PostData[] = await PostDatabase.getFeed(id);
  
      const posts = queryResult.map(post => (
        new Post(
          post.id,
          post.photo,
          post.description,
          post.type,
          post.author_id,
          post.created_at
        )
      ))

      return posts
      
    } catch (error) {
      throw new Error(error.message);
    }
  }

}

export default new PostBusiness();