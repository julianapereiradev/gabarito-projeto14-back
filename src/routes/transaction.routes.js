import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.js";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import { transactionSchema } from "../schemas/transaction.schemas.js";
import { createTransactions, getTransactions } from "../controllers/transaction.controllers.js";

const transactionRouter = Router()

transactionRouter.post("/transactions", authValidation, schemaValidation(transactionSchema), createTransactions)
transactionRouter.get("/transactions", authValidation, getTransactions)

export default transactionRouter