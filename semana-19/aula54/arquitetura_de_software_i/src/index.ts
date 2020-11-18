import express from 'express'
import cors from 'cors'
import { connection } from './data/connection'
import signup from './controller/user/signup'
import login from './controller/user/login'
import getAllUsers from './controller/user/getAllUsers'
import deleteUser from './controller/user/deleteUser'

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})

app.put("/signup", signup);
app.post("/login", login);

app.get("/all", getAllUsers);

app.delete("/:id", deleteUser);

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})
