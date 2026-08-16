import express, { Router } from "express";
import departamentoController from "../controllers/departamentoController.js";

const router = express.Router();

router.get("/", departamentoController.listarDepartamentos); 

export default Router;