import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();


export const addFollow = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, brandId } = req.params

    const newfollow = await prisma.follow.create({
      data: {
      userId,
       brandId
      },
    });

    res.status(201).json(newfollow);
  }  catch (error: any) {
    console.error('Error retrieving collection:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
};



export async function getAllBrandfllower(req: Request, res: Response): Promise<void> {
  try {
    const { brandId } = req.params
   const fllowers = await prisma.follow.findMany({
    where: { brandId: brandId },
    include: {
      User: true,
    },
   
  })   
     if (!fllowers) {
      res.status(404).json({
        success: false,
        message: 'brand not found',
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: 'follwer retrieved successfully',
      data:fllowers,
    });
  } catch (error: any) {
    console.error('Error retrieving collection:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
}



export async function getAlluserfollowed(req: Request, res: Response): Promise<void> {
  const { userId } = req.params
  try {
 
   const fllowers = await prisma.follow.findMany({
    where: { userId: userId },
    include: {
      Brand: true,
    },
   
  })   
     if (!fllowers) {
      res.status(404).json({
        success: false,
        message: 'brand not found',
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: 'follwer retrieved successfully',
      data:fllowers,
    });
  } catch (error: any) {
    console.error('Error retrieving collection:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
}



// export async function removeFollow(req: Request, res: Response): Promise<void> {
 
//   const { userId, brandId } = req.params;
  
//   try {
//     const deletedfollow = await prisma.follow.delete({
//       where: {userId, brandId }
//   });

//     console.log('follow removed:',deletedfollow);
//     res.status(200).json(deletedfollow);
//   } catch (error: any) {
//     console.error('Error deleting brand:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Internal server error',
//       error: error.message,
//     });
//   }
// }


export const removeFollow = async (req: Request, res: Response): Promise<void> => {
  try {
    const { Id } = req.params 
    const deletedFollow = await prisma.follow.delete({
      where: { id:Id}
    });

    res.status(200).json({ success: true, message: 'Follow removed successfully' });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
  }
}