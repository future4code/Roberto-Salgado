export enum TABLE_NAME {
  USER = "aula54_User_Arq"
}

export enum USER_ROLES {
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN'
}

export type AuthenticationData = {
  id: string,
  role: USER_ROLES
}

export type User = {
  id: string
  name: string,
  email: string,
  password: string,
  role: USER_ROLES
}

export type SignupInput = {
  name: string,
  email: string,
  password: string,
  role: USER_ROLES
}

export type LoginInput = {
  email: string,
  password: string,
}

export type DeleteInput = {
  id: string,
  token: string
}


