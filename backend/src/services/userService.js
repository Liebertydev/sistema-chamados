import prisma from "../database/prisma.js";

class UserService {
    
    async criarUsuario(dados) {
        console.log(dados);
    }
}

export default new UserService();