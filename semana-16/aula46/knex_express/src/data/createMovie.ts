import { connection } from "..";

export const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  releaseDate: Date,
  rating: number,
  playingLimitDate: Date
) => {
  await connection
    .insert({
      id,
      title,
      synopsis,
      release_date: releaseDate,
      rating,
      playing_limit_date: playingLimitDate
    })
    .into("Movie");
};