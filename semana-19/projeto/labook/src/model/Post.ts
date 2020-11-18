export enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event"
}

export class Post {
  private id: string;
  private photo: string;
  private description: string;
  private type: POST_TYPES;
  private createdAt: Date | undefined;
  private authorId: string;

  constructor(
    id: string,
    photo: string,
    description: string,
    type: string,
    authorId: string,
    createdAt?: Date
  ){
    this.id = id;
    this.photo = photo;
    this.description = description;
    
    if (type.toLowerCase() === POST_TYPES.EVENT) {
      this.type = POST_TYPES.EVENT;
    } else if (type.toLowerCase() === POST_TYPES.NORMAL || !type) {
      this.type = POST_TYPES.NORMAL;
    } else {
      throw new Error("Invalid post type");
    }
    
    this.authorId = authorId;
    this.createdAt = createdAt;
  }

  public getId = () => this.id;
  public getPhoto = () => this.photo;
  public getDescription = () => this.description;
  public getType = () => this.type;
  public getAuthorId = () => this.authorId;
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

export type PostData = Array<{
  id: string,
  photo: string,
  description: string,
  type: string,
  created_at: Date,
  author_id: string
}>