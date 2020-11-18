import express, { Express } from "express";
import cors from "cors";
import { connection } from "./data/connection";
import { userRouter } from "./routes/userRoutes";
import { postRouter } from "./routes/postRoutes";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/", async function(req,res){
   try {
      res.send(await connection.raw('show tables'));
   } catch (error) {
      throw new Error(error.message);
   }
})

app.use("/user", userRouter);

app.use("/post", postRouter);

app.listen(3003, () => {
   console.log("Server running on port 3003");
})