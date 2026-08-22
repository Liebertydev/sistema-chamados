import userService from "../services/userService.js";

const criarUsuario = async (req, res) => {
    try {

        const usuario = await userService.criarUsuario(req.body);

        return res.status(201).json(usuario);

    } catch(e) {

    }
}

export default {
    criarUsuario,
}