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


    async criarDepartamento(nome) {
        const departamentoExistente = await prisma.departamento.findUnique({
            where: {
                nome: nome
            }
        });

        if (departamentoExistente) {
            throw new Error("Já existe um departamento com este nome.");
        }

        const departamento = await prisma.departamento.create({
            data: {
                nome: nome
            }
        })
    }

    async atualizarDepartamento(id, nome) {
        const departamento = await prisma.departamento.findUnique({
            where: {
                id: id
            }
        }); 

        if (!departamento) {
            throw new Error("Departamento não encontrado.")
        }

        const departamentoExistente = await prisma.departamento.findUnique({
            where: {
                nome: nome
            }
        });

        if (departamentoExistente && departamentoExistente.id !== id) {
            throw new Error("Já existe um departamento com este nome.")
        }

        return await prisma.departamento.update({
            where: {
                id: id
            },
            data: {
                nome: nome
            }
        });
    }
}

export default new DepartamentoService();