/*
  Warnings:

  - Added the required column `columnId` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Team` ADD COLUMN `columnId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Team` ADD CONSTRAINT `Team_columnId_fkey` FOREIGN KEY (`columnId`) REFERENCES `Column`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
