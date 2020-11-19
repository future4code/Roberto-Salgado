import express, { Express } from "express";
import cors from "cors";
import { userRouter } from "./routes/userRoutes";
import { postRouter } from "./routes/postRoutes";
import DatabaseSetup from "./data/DatabaseSetup";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/", async function(req,res){
	try {
		res.send(await DatabaseSetup.displayTables());
	} catch (error) {
		throw new Error(error.message);
	}
})

app.use("/user", userRouter);

app.use("/post", postRouter);

app.listen(3003, () => {
	console.log("Server running on port 3003");
})