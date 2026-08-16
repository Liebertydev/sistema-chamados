/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[matricula]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoria` to the `Chamado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroPatrimonio` to the `Chamado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ocupacao` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusSolicitacaoTecnico" AS ENUM ('PENDENTE', 'APROVADA', 'REJEITADA');

-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'TECHNICIAN';

-- AlterTable
ALTER TABLE "Chamado" ADD COLUMN     "categoria" TEXT NOT NULL,
ADD COLUMN     "dataPrevisaoResolucao" TIMESTAMP(3),
ADD COLUMN     "numeroPatrimonio" INTEGER NOT NULL,
ADD COLUMN     "tecnicoId" INTEGER,
ALTER COLUMN "descricao" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "cpf" TEXT,
ADD COLUMN     "matricula" TEXT,
ADD COLUMN     "ocupacao" TEXT NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'USER';

-- CreateTable
CREATE TABLE "SolicitacaoTecnico" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "StatusSolicitacaoTecnico" NOT NULL DEFAULT 'PENDENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SolicitacaoTecnico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "User_matricula_key" ON "User"("matricula");

-- AddForeignKey
ALTER TABLE "SolicitacaoTecnico" ADD CONSTRAINT "SolicitacaoTecnico_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chamado" ADD CONSTRAINT "Chamado_tecnicoId_fkey" FOREIGN KEY ("tecnicoId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
