import { Request, Response } from "express";
import { getAllMovies } from "../data/getAllMovies";

export const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await getAllMovies();

    res.status(200).send({
      movies: movies,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}