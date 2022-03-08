/*
  Warnings:

  - You are about to drop the column `groupId` on the `Card` table. All the data in the column will be lost.
  - Added the required column `columnId` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupId` to the `Column` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_groupId_fkey";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "groupId",
ADD COLUMN     "columnId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Column" ADD COLUMN     "groupId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Group_name_key" ON "Group"("name");

-- AddForeignKey
ALTER TABLE "Column" ADD CONSTRAINT "Column_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "Column"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
