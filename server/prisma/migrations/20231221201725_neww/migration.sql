-- DropForeignKey
ALTER TABLE "Creator" DROP CONSTRAINT "Creator_brandId_fkey";

-- AlterTable
ALTER TABLE "Creator" ALTER COLUMN "brandId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Creator" ADD CONSTRAINT "Creator_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;
