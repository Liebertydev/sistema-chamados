import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const departamentos = [
  {
    nome: "CHEFIA DE GABINETE",
  },
  {
    nome: "CONTROLADORIA GERAL DO MUNICÍPIO",
  },
  {
    nome: "PROCURADORIA GERAL DO MUNICÍPIO",
  },
  {
    nome: "SECRETARIA DE ADMINISTRAÇÃO E GESTÃO DE PESSOAS - SMAGP",
  },
  {
    nome: "SECRETARIA DE CULTURA, ESPORTES, TURISMO, LAZER E JUVENTUDE - SMCETLJ",
  },
  {
    nome: "SECRETARIA DE DESENVOLVIMENTO ECONÔMICO, AGRICULTURA E MEIO AMBIENTE - SMDEAMA",
  },
  {
    nome: "SECRETARIA DE DESENVOLVIMENTO SOCIAL, MULHER, TRABALHO E PROMOÇÃO A CIDADANIA - SMDSMTPC",
  },
];

async function main() {
    await prisma.departamento.createMany({
        data: departamentos,
    });

    console.log("Departamentos criados com sucesso!");
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });



