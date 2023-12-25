import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const getFavoritesById = async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.userId;
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                favorite: {
                    include: {
                        Product: true,
                    },
                },
            },
        });

        if (!user) {
            res.status(230).json([]);
            return;
        }

        res.status(200).json(user.favorite);
    } catch (error) {
        console.error('Error retrieving favorites for user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

export const addProductToFav = async (req: Request, res: Response): Promise<void> => {
    const { userId, prodId } = req.params;

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            res.status(404).json({ success: false, message: 'User not found' });
            return;
        }

        const product = await prisma.product.findUnique({
            where: { id: prodId },
        });

        if (!product) {
            res.status(404).json({ success: false, message: 'Product not found' });
            return;
        }

        await prisma.favorite.create({
            data: {
                userId: userId,
                productId: prodId,
            },
        });

        res.status(201).json({ success: true, message: 'Product added to favorites successfully', product });
    } catch (error) {
        console.error('Error adding product to favorites:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const deleteFromFav = async (req: Request, res: Response): Promise<void> => {
    const {userId,prodId} = req.params;


    try {
        const user = await prisma.user.findUnique({
            where:{id:userId},
        });

        if (!user) {
            res.status(404).json({ success: false, message: 'User not found' });
            return;
        }

        const productToDelete = await prisma.product.findUnique({
            where:{id:prodId},
        });

        if (!productToDelete) {
            res.status(404).json({ success: false, message: 'Product not found' });
            return;
        }

        await prisma.favorite.deleteMany({
            where: {
                userId: userId,
                productId: prodId,
            },
        });

        res.status(200).json({ success: true, message: 'Product removed from favorites successfully', product: productToDelete });
    } catch (error) {
        console.error('Error deleting product from favorites:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};