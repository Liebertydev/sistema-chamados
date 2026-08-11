-- CreateEnum
CREATE TYPE "StatusChamado" AS ENUM ('ABERTO', 'EM_ANDAMENTO', 'RESOLVIDO', 'FECHADO');

-- CreateEnum
CREATE TYPE "PrioridadeChamado" AS ENUM ('BAIXA', 'MEDIA', 'ALTA', 'URGENTE');

-- AlterTable
ALTER TABLE "Chamado" ADD COLUMN     "prioridade" "PrioridadeChamado" NOT NULL DEFAULT 'MEDIA',
ADD COLUMN     "status" "StatusChamado" NOT NULL DEFAULT 'ABERTO';
