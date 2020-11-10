import * as jwt from "jsonwebtoken";

export type AuthenticationData = {
  id: string,
}

const expiresIn = "1min";

export function generateToken(input: AuthenticationData): string {
  return jwt.sign(
    {
      id: input.id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
}

export function getTokenData(
  token: string
): AuthenticationData {
  return jwt.verify(
    token,
    process.env.JWT_KEY as string
  ) as AuthenticationData
}