import departamentoService from "../services/departamentoService.js";

const listarDepartamentos = async(req, res) => {
    try {
        const departamentos = await departamentoService.listarDepartamentos();

        return res.status(200).json(departamentos);

    } catch(error) {
        console.error("Error ao listar departamentos:", error.message);
        return res.status(500).json({ mensagem: "Erro interno no servidor." });
    }
}

const buscarDepartamentoPorId = async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ mensagem: "ID inválido." });
        }

        const departamentoPorId = await departamentoService.buscaPorId(id);
        res.json(departamentoPorId);
    } catch(e) {
        if(e.message === "Departamento não encontrado.") {
            return res.status(404).json({ mensagem: e.message });  
        }

        return res.status(500).json({ message: "Erro interno do servidor." });
    }
}

export default {
    listarDepartamentos,
    buscarDepartamentoPorId
}