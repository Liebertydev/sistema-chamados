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

    async buscaPorId(id) {
        const departamentoId = await prisma.departamento.findUnique({
            where: {
                id: id
            }
        });

        if (!departamentoId) {
            throw new Error("Departamento não encontrado.");
        }

        return departamentoId;
    }
}

export default new DepartamentoService();