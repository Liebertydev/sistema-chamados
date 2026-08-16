import express from "express";
import departamentoRoutes from "./routes/departamento.routes.js";

const app = express();

app.use(express.json());

app.use("/departamentos", departamentoRoutes);

export default app;