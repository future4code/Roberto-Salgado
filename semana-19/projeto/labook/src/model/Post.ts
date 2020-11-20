export enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event"
}

export class Post {
  private type: POST_TYPES;

  constructor(
    private id: string,
    private photo: string,
    private description: string,
    type: string,
    private authorId: string,
    // private authorName?: string,
    private createdAt?: Date
  ) {
    if (type.toLowerCase() === POST_TYPES.EVENT) {
      this.type = POST_TYPES.EVENT;
    } else if (type.toLowerCase() === POST_TYPES.NORMAL || !type) {
      this.type = POST_TYPES.NORMAL;
    } else {
      throw new Error("Invalid post type");
    }
  }

  public getId = () => this.id;
  public getPhoto = () => this.photo;
  public getDescription = () => this.description;
  public getType = () => this.type;
  public getAuthorId = () => this.authorId;
  // public getauthorName = () => this.authorName;
  public getCreatedAt = () => this.createdAt;
}

export type CreatePostInput = {
  photo: string,
  description: string,
  type: string,
  authorId: string
}

export type CreatePostData = {
  id: string,
  photo: string,
  description: string,
  type: string,
  authorId: string
}

export type PostData = {
  id: string,
  photo: string,
  description: string,
  type: string,
  created_at: Date,
  author_id: string
}