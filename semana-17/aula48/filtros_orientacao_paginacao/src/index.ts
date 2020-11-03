import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUsersByNameQuery } from "./endpoints/getUsersByNameQuery";
import { getUsersByTypeParams } from "./endpoints/getUsersByTypeParams";
import { getUsersOrder } from "./endpoints/getUserOrder";
import { getUsersPage } from "./endpoints/getUsersPage";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/users/all", getAllUsers);

app.get("/users/filter", getUsersByNameQuery);

app.get("/users/filter/:type", getUsersByTypeParams);

app.get("/users/order", getUsersOrder);

app.get("/users/page", getUsersPage);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
