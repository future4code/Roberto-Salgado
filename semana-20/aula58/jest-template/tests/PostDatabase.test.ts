import { BaseDatabase } from "../src/data/BaseDatabase";
import PostDatabase from "../src/data/PostDatabase";

describe("Create Post", ()=>{
  test("Success Case", async () => {
    const post = {
      id: "abc123",
      title: "Título",
      content: "Conteúdo",
    };

    await PostDatabase.createPost(post.id, post.title, post.content);
    const postFromDb = await PostDatabase.getPostById(post.id);

    expect(postFromDb).not.toBe(undefined);
    expect(postFromDb).toEqual({
      id: "abc123",
      title: "Título",
      content: "Conteúdo",
    });
  });

  test("Fail Case", async () => {
    try {
      const post = {
        id: "abc123",
        title: "Título",
        content: "Conteúdo",
      };
  
      await PostDatabase.createPost(post.id, post.title, post.content);
      await PostDatabase.createPost(post.id, post.title, post.content);
    } catch (err) {
      expect(err).not.toBe(undefined)
    }
  });

  afterAll(async () => {
    await PostDatabase.deletePost("abc123");
    await BaseDatabase.destroyConnection();
  });
})