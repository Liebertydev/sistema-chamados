/*
  Warnings:

  - Added the required column `equipamento` to the `Chamado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localizacaoId` to the `Chamado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chamado" ADD COLUMN     "equipamento" TEXT NOT NULL,
ADD COLUMN     "localizacaoId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Localizacao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "setor" TEXT NOT NULL,
    "detalhe" TEXT NOT NULL,

    CONSTRAINT "Localizacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Chamado" ADD CONSTRAINT "Chamado_localizacaoId_fkey" FOREIGN KEY ("localizacaoId") REFERENCES "Localizacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
