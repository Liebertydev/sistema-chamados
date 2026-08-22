import express from "express";
import departamentoRoutes from "./routes/departamento.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.use("/departamentos", departamentoRoutes);

app.use("/usuarios", userRoutes);

export default app;