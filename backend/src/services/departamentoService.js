import prisma from "../database/prisma.js";

class DepartamentoService {
    async listarDepartamentos() {
        const departamentos =  await prisma.departamento.findMany({
            orderBy: {
                nome: "asc"
            }
        });

       return departamentos;
    }

    async buscaPorId() {
        
    }
}

export default new DepartamentoService();