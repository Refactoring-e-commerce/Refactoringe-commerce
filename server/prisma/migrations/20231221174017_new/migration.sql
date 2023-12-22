-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthDate" DATE NOT NULL,
    "image" TEXT DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fpng%2F11675382-man-avatar-image-for-profile&psig=AOvVaw13jl7u6f6SEI9kx-79C7j7&ust=1703065759489000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCi3sWcm4MDFQAAAAAdAAAAABAD',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wallet" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT[],
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "reference" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "collectionId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fpng%2F11675382-man-avatar-image-for-profile&psig=AOvVaw13jl7u6f6SEI9kx-79C7j7&ust=1703065759489000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCi3sWcm4MDFQAAAAAdAAAAABAD',
    "cover" TEXT DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fimagekit.io%2Fblog%2Fhow-to-resize-image-in-html%2F&psig=AOvVaw0b5mwqSTBp6PX8wITT6hj0&ust=1703065630198000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiysYWcm4MDFQAAAAAdAAAAABAD',
    "bio" TEXT,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostBrand" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "date" TIMESTAMP NOT NULL,
    "brandId" TEXT,

    CONSTRAINT "PostBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brandId" TEXT,
    "creatorId" TEXT,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Creator" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fpng%2F11675382-man-avatar-image-for-profile&psig=AOvVaw13jl7u6f6SEI9kx-79C7j7&ust=1703065759489000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCi3sWcm4MDFQAAAAAdAAAAABAD',
    "cover" TEXT DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fimagekit.io%2Fblog%2Fhow-to-resize-image-in-html%2F&psig=AOvVaw0b5mwqSTBp6PX8wITT6hj0&ust=1703065630198000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiysYWcm4MDFQAAAAAdAAAAABAD',
    "bio" TEXT,
    "brandId" TEXT NOT NULL,

    CONSTRAINT "Creator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Follow" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "brandId" TEXT,

    CONSTRAINT "Follow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreatorComment" (
    "id" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "CreatorComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostCreator" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "creatorId" TEXT,

    CONSTRAINT "PostCreator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BrandComment" (
    "id" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "userId" TEXT,
    "postBrandId" TEXT,

    CONSTRAINT "BrandComment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_email_key" ON "Brand"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_name_key" ON "Collection"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Creator_email_key" ON "Creator"("email");

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostBrand" ADD CONSTRAINT "PostBrand_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Creator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Creator" ADD CONSTRAINT "Creator_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreatorComment" ADD CONSTRAINT "CreatorComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostCreator" ADD CONSTRAINT "PostCreator_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Creator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandComment" ADD CONSTRAINT "BrandComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandComment" ADD CONSTRAINT "BrandComment_postBrandId_fkey" FOREIGN KEY ("postBrandId") REFERENCES "PostBrand"("id") ON DELETE SET NULL ON UPDATE CASCADE;
