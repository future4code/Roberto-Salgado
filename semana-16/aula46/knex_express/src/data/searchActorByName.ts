import { connection } from ".."

export const searchActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name LIKE "%${name}%"
  `)
  return result[0]
}