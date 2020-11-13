export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export type User = {
  id: string,
  name: string,
  email: string,
  role: USER_ROLES,
  password: string,
}

export type Recipe = {
  id: string,
  title: string,
  description: string,
  createdAt: Date,
  userId: string
}