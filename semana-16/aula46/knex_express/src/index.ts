import express, { Request, Response } from "express";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { getActorById } from "./endpoints/getActorById";
import { getActorCountByGender } from "./endpoints/getActorCountByGender";
import { putNewActor } from "./endpoints/putNewActor";
import { postUpdateSalary } from "./endpoints/postUpdateSalary";
import { deleteActorById } from "./endpoints/deleteActorById";
import { postNewMovie } from "./endpoints/postNewMovie";
import { getMovies } from "./endpoints/getAllMovies";
import { getMovieByQuery } from "./endpoints/getMovieByQuery";

/**************************************************************/

dotenv.config();

/**************************************************************/

export const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

app.get('/', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result[0])
  } catch (error) {
    res.status(400).send(error.message)
  }
}

app.get("/actor", getActorCountByGender);

app.get("/actor/:id", getActorById);

app.put("/actor", putNewActor)

app.post("/actor", postUpdateSalary)

app.delete("/actor/:id", deleteActorById);

app.post("/movie", postNewMovie);

app.get("/movie/all", getMovies);

app.get("/movie/search", getMovieByQuery);