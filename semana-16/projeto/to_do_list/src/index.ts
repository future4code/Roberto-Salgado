import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

import { getAllUsers } from "./endpoint/getAllUsers";
import { putNewUser } from "./endpoint/putNewUser";
import { getUserById } from "./endpoint/getUserById";
import { postEditUser } from "./endpoint/postEditUser";
import { putNewTask } from "./endpoint/putNewTask";
import { getAllTasks } from "./endpoint/getAllTasks";
import { getTaskById } from "./endpoint/getTaskById";
import { getTasksByUserId } from "./endpoint/getTasksByUserId";
import { getUserByQuery } from "./endpoint/getUserByQuery";
import { postUserToTask } from "./endpoint/postUserToTask";
import { getResponsibleUsersByTask } from "./endpoint/getResponsibleUsersByTask";
import { postUpdateTaskStatus } from "./endpoint/postUpdateTaskStatus";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || "3306"),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

// endpoints aqui

app.get("/user/all", getAllUsers);

app.get("/user", getUserByQuery);

app.put("/user", putNewUser);

app.get("/user/:id", getUserById);

app.post("/user/edit/:id", postEditUser);

app.get("/task/all", getAllTasks);

app.get("/task", getTasksByUserId);

app.put("/task", putNewTask);

app.get("/task/:id", getTaskById);

app.post("/task/responsible", postUserToTask);

app.get("/task/:id/responsible", getResponsibleUsersByTask);

app.post("/task/status/edit", postUpdateTaskStatus);

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
