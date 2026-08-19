import express from "express";
import departamentoController from "../controllers/departamentoController.js";

const router = express.Router();

//Rotas GET
router.get("/", departamentoController.listarDepartamentos); 
router.get("/:id", departamentoController.buscarDepartamentoPorId);

//Rotas POST

router.post("/", departamentoController.criarDepartamento);

//Rotas PATCH

router.patch("/:id", departamentoController.atualizarDepartamento);

//Rotas DELETE

router.delete("/:id", departamentoController.excluirDepartamento);

export default router;