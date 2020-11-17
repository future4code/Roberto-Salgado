export type AuthenticationData = {
  id: string
}

export type User = {
  id: string,
  name: string,
  email: string,
  password: string
}

export type CreateUserInput = {
  name: string,
  email: string,
  password: string
}

export type InsertUserData = {
  id: string,
  name: string,
  email: string,
  password: string
}

export type LoginInput = {
  email: string,
  password: string
}