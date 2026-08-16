import express from "express";
import departamentoController from "../controllers/departamentoController.js";

const router = express.Router();

router.get("/", departamentoController.listarDepartamentos); 
router.get("/:id", departamentoController.buscarDepartamentoPorId);

export default router;