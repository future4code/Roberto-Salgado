import { Request, Response } from "express";
import { searchMovie, searchMovieWithQueryBuilder } from "../data/searchMovie";

export const getMovieByQuery = async (req: Request, res: Response) => {
  try {
    // const movies = await searchMovie(req.query.query as string);
    const movies = await searchMovieWithQueryBuilder(req.query.query as string);

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}