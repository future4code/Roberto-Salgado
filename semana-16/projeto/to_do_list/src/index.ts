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
})

const app: Express = express();
app.use(express.json());
app.use(cors())

// endpoints aqui

app.get("/user", getAllUsers)

app.put("/user", putNewUser)

app.get("/user/:id", getUserById)

app.post("/user/edit/:id", postEditUser)

app.get("/task", getAllTasks)

app.put("/task", putNewTask)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
