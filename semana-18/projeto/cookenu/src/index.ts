import cors from "cors";
import dotenv from "dotenv";
import knex from "knex";
import express from "express";
import { AddressInfo } from "net";
import signup from "./endpoints/signup";
import login from "./endpoints/login";
import getUserByToken from "./endpoints/getUserByToken";
import getUserById from "./endpoints/getUserById";
import createRecipe from "./endpoints/createRecipe";
import getRecipeById from "./endpoints/getRecipeById";

dotenv.config()

export const connection = knex({
  client: 'mysql',
  connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306
  }
});

const app = express();
app.use(express.json());
app.use(cors());

app.post('/signup', signup);

app.post('/login', login);

app.get("/user/profile", getUserByToken);

app.get("/user/:id", getUserById);

app.post("/recipe", createRecipe)

app.post("/recipe/:id", getRecipeById)

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});