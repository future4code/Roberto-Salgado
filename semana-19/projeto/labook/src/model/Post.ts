export enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event"
}

export type Post = {
  id: string,
  photo: string,
  description: string,
  type: POST_TYPES,
  createdAt: Date,
  authorId: string
}

export type CreatePostInput = {
  photo: string,
  description: string,
  type: POST_TYPES,
  authorId: string
}

export type InsertPostData = {
  id: string,
  photo: string,
  description: string,
  type: POST_TYPES,
  authorId: string
}

export type selectPostByIdResult = {
  id: string,
  photo: string,
  description: string,
  type: POST_TYPES,
  created_at: Date,
  author_id: string
}[]