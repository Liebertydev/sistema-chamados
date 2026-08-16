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

export default {
    listarDepartamentos
}