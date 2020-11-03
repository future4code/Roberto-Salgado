import { connection } from "..";

export const getAllMovies = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie LIMIT 15
  `);

  return result[0];
};