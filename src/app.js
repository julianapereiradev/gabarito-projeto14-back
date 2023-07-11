import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.routes.js";

//Settings:
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

app.use(router)

//PORT:
const port = process.env.PORT || 5000
app.listen(port, () =>
  console.log(`O servidor está rodando na porta ${port}`)
);
