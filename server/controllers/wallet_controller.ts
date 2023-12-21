import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getWalletById = async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.userId; 
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                wallets: {
                    include: {
                        Product: true,
                    },
                },
            },
        });

        if (!user) {
            res.status(404).send({ success: false, message: 'User not found' });
            return;
        }

        res.status(200).send({ success: true, wallets: user.wallets });
    } catch (error) {
        console.error('Error retrieving wallets for user:', error);
        res.status(500).send(error);
    }
};







export const addProductForUser = async (req: Request, res: Response): Promise<void> => {
    const userId = req.body.userId;
    const productId = req.body.productId;

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        const existingProduct = await prisma.product.findUnique({
            where: { id: productId },
        });

        if (!user) {
            res.status(404).send({ success: false, message: 'User not found' });
        } else if (!existingProduct) {
            res.status(404).send({ success: false, message: 'Existing product not found' });
        } else {
            await prisma.wallet.create({
                data: {
                    userId: userId,
                    productId: productId,
                },
            });

            res.status(200).send({
                success: true,
                message: 'Existing product added to user successfully',
                product: existingProduct,
            });
        }
    } catch (error) {
        console.error('Error adding existing product for user:', error);
        res.status(500).send({ success: false, message: 'Internal server error' });
    }
};



export const DeleteProduct = async(req:Request,res:Response) : Promise<void>=>{

    const userId = req.params.userId;
    const prodId = req.params.prodId;
    try {
        const user = await prisma.user.findUnique({
            where:{id:userId},
        });
        const productToDelete = await prisma.product.findUnique({
            where:{id:prodId},
        });
        if (!user) {
             res.status(404).send({ success: false, message: 'User not found' });
        }
        
       else if (!productToDelete) {
             res.status(404).send({ success: false, message: 'Product not found' });
        }
         else await prisma.wallet.deleteMany({where:
              {
                userId: userId,
                productId: prodId,
             }
         });
        res.status(200).send({ success: true, message: 'Product deleted for user successfully', product: productToDelete });
    } catch (error) {
        console.error('Error deleting product for user:', error);
        res.status(500).send(error);
    }
};



exports.deleteAll = async (req:Request, res:Response): Promise<void> => {
    const userId = req.params.userId ;
    try {
        const user = await prisma.user.findUnique({where:
            {id:userId}
        });
        if (!user) {
            res.status(404).send({ success: false, message: 'User not found' });
        }
       else{ await prisma.wallet.deleteMany({where:
            {userId:userId}
           });

        res.status(200).send({ success: true, message: 'All products deleted for user successfully' });
       }
    } catch (error) {
        res.status(500).send(error);
    }
};

// export const incrIntquantity = async (req: Request, res: Response): Promise<void> => {
//     const userId = req.params.userId;
//     const prodId = req.params.prodId;

//     try {
//         const user = await prisma.user.findUnique({
//             where: { id: userId },
//         });
//         if (!user) {
//              res.status(404).send({ success: false, message: 'User not found' });
//         }

//         const productToUpdate = await prisma.product.findUnique({
//             where: { id: prodId },
//         });
//         if (!productToUpdate) {
//             res.status(404).send({ success: false, message: 'Product not found' });
//         }

//         if (productToUpdate.Intquantity < productToUpdate.quantity) {
//             productToUpdate.Intquantity = productToUpdate.Intquantity + 1;
//         }

//         await prisma.product.update({
//             where: { id: prodId },
//             data: { Intquantity: productToUpdate.Intquantity },
//         });

//         res.status(200).send({
//             success: true,message: 'Product updated for user successfully', product: productToUpdate,
//         });
//     } catch (error) {
//         console.error('Error updating product quantity for user:', error);
//         res.status(500).send({ success: false, message: 'Internal server error' });
//     }
// };



// export const decrIntquantity = async (req: Request, res: Response): Promise<void> => {
//     const userId = req.params.userId;
//     const prodId = req.params.prodId;

//     try {
//         const user = await prisma.user.findUnique({
//             where: { id: userId },
//         });
//         if (!user) {
//              res.status(404).send({ success: false, message: 'User not found' });
//         }

//         const productToUpdate = await prisma.product.findUnique({
//             where: { id: prodId },
//         });
//         if (!productToUpdate) {
//              res.status(404).send({ success: false, message: 'Product not found' });
//         }

//         if (productToUpdate.Intquantity > 1) {
//             productToUpdate.Intquantity = productToUpdate.Intquantity - 1;
//         }

//         await prisma.product.update({
//             where: { id: prodId },
//             data: { Intquantity: productToUpdate.Intquantity },
//         });

//         res.status(200).send({
//             success: true,
//             message: 'Product updated for user successfully',
//             product: productToUpdate,
//         });
//     } catch (error) {
//         console.error('Error updating product quantity for user:', error);
//         res.status(500).send({ success: false, message: 'Internal server error' });
//     }
// };


// export const UpdatIntquantity = async (req: Request, res: Response): Promise<void> => {
//     const userId = req.params.userId;
//     const prodId = req.params.prodId;

//     try {
//         const user = await prisma.user.findUnique({
//             where: { id: userId },
//         });
//         if (!user) {
//             res.status(404).send({ success: false, message: 'User not found' });
//         }

//         const productToUpdate = await prisma.product.findUnique({
//             where: { id: prodId },
//         });
//         if (!productToUpdate) {
//            res.status(404).send({ success: false, message: 'Product not found' });
//         }

//         await prisma.product.update({
//             where: { id: prodId },
//             data: { Intquantity: 1 },
//         });

//         res.status(200).send({
//             success: true,
//             message: 'Product updated for user successfully',
//             product: productToUpdate,
//         });
//     } catch (error) {
//         console.error('Error updating product quantity for user:', error);
//         res.status(500).send({ success: false, message: 'Internal server error' });
//     }
// };

// export const UpQnty = async (req: Request, res: Response): Promise<void> => {
//     const userId = req.params.userId;
//     const prodId = req.params.prodId;

//     try {
//         const user = await prisma.user.findUnique({
//             where: { id: userId },
//         });
//         if (!user) {
//             res.status(404).send({ success: false, message: 'User not found' });
//         }

//         const productToUpdate = await prisma.product.findUnique({
//             where: { id: prodId },
//         });
//         if (!productToUpdate) {
//              res.status(404).send({ success: false, message: 'Product not found' });
//         }

//         productToUpdate.quantity = productToUpdate.quantity - productToUpdate.Intquantity;
//         productToUpdate.Intquantity = 1;

//         await prisma.product.update({
//             where: { id: prodId },
//             data: { quantity: productToUpdate.quantity, Intquantity: productToUpdate.Intquantity },
//         });

//         res.status(200).send({
//             success: true,
//             message: 'Product updated for user successfully',
//             product: productToUpdate,
//         });
//     } catch (error) {
//         console.error('Error updating product quantity for user:', error);
//         res.status(500).send({ success: false, message: 'Internal server error' });
//     }
// };