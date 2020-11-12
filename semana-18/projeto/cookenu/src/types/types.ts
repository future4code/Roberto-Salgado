export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export type InputSignUp = {
  id: string,
  name: string,
  email: string,
  role: USER_ROLES,
  password: string
}

export type User = {
  id: string,
  name: string,
  email: string,
  role: USER_ROLES,
  password: string,
}