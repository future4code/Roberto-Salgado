import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connection } from './data/connection'
import signup from './controller/user/signup'
import login from './controller/user/login'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})

app.put("/signup", signup);
app.post("/login", login);



app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})
