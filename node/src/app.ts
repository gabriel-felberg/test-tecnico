import express from "express"
import routerUser from "../src/route/user.routes"
import { handleErrorMiddleware } from "./middleware/handleError.middleware"
import cors from "cors"

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permitindo acesso de qualquer origem
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
app.use(express.json())
app.use("/", routerUser)
app.use(handleErrorMiddleware)

// app.use(cors());

app.listen(3000)