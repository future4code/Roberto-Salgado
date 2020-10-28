import { connection } from "..";

export const searchMovie = async (query: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movie 
      WHERE 
        title LIKE "%${query}%" OR
        synopsis LIKE "%${query}%"
  `)
  return result[0];
}

export const searchMovieWithQueryBuilder = async (query: string): Promise<any> => {
  const result = await connection("Movie")
    .select("*")
    .where("title", "LIKE", `%${query}%`)
    .orWhere("synopsis", "LIKE", `%${query}%`)
  return result;
}