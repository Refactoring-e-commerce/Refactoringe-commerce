/*
  Warnings:

  - You are about to drop the column `token` on the `Brand` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `Creator` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "token";

-- AlterTable
ALTER TABLE "Creator" DROP COLUMN "token";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "token";
