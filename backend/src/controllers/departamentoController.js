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

const criarDepartamento = async (req, res) => {
    try {

        const { nome } = req.body;

        if(!nome || typeof nome !== "string" || nome.trim() === "") {
            return res.status(400).json({
                message: "O campo 'nome' é obrigatório e deve ser um texto válido." 
            });
        }
        
        const departamento = await departamentoService.criarDepartamento(nome);

        return res.status(201).json(departamento);

    } catch (e) {

        if(e.message === "Já existe um departamento com este nome.") {
            return res.status(409).json({ mensagem: e.message });
        }

        console.error("Erro ao criar departamento:", e.message);
        return res.status(500).json({ mensagem: "Erro interno no servidor." });

    }
}

const atualizarDepartamento = async (req, res) => {
    try {
        const { nome } = req.body;
        const id = Number(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                mensagem: "ID inválido."
            });
        }

        if (!nome || typeof nome !== "string" || nome.trim() === "") {
            return res.status(400).json({
                mensagem: "O campo 'nome' é obrigatório e deve ser um texto válido."
            });
        }

        const departamento = await departamentoService.atualizarDepartamento(id, nome);

        res.status(200).json(departamento);

    } catch(e) {
        if (e.message === "Departamento não encontrado.") {
            return res.status(404).json({
                mensagem: e.message
            });
        }

        if(e.message === "Já existe um departamento com este nome.") {
            return res.status(409).json("Já existe um departamento com este nome.");
        }

        console.error("Erro ao atualizar departamento:", e.message);

        return res.status(500).json({
            mensagem: "Erro interno no servidor."
        });
    }
}

const excluirDepartamento = async (req, res) => {
    try {

        const id = Number(req.params.id);
    
        if(isNaN(id)) {
            return res.status(400).json({
                mensagem: "ID inválido."
            });
        }
    
        const departamentoExcluido = await departamentoService.excluirDepartamento(id);
    
        return res.status(200).json(departamentoExcluido);

    } catch (e) {
        if (e.message === "Departamento não encontrado.") {
            return res.status(404).json({
                mensagem: e.message
            });
        }

        console.error("Erro ao excluir departamento.", e.message);

        return res.status(500).json({
            mensagem: "Erro interno de servidor"
        });
    }
}

export default {
    listarDepartamentos,
    buscarDepartamentoPorId,
    criarDepartamento,
    atualizarDepartamento,
    excluirDepartamento
}