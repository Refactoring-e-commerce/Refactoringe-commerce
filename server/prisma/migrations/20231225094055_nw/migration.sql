/*
  Warnings:

  - You are about to drop the column `bitrthDate` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `User` table. All the data in the column will be lost.
  - Added the required column `birthDate` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "bitrthDate",
DROP COLUMN "type",
ADD COLUMN     "birthDate" TEXT NOT NULL;
