import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export async function createBrand(req: Request, res: Response): Promise<void> {
  try {
    const {fullName, email, password, image, cover, bio} = req.body;
    if (!fullName || !email || !password) {
      res.status(400).json({ error: 'Missing required fields.' });
      return;
    }

    const newBrand = await prisma.brand.create({
      data: {
        fullName: fullName,
        email: email,
        password: password,
        image: image,
        cover: cover,
        bio: bio,
      },
    });

    console.log('New Brand created:', newBrand);
    res.status(201).json(newBrand); 
  } catch (error: any) {
    console.error('Error retrieving collection:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
}

export async function getOneBrand(req: Request, res: Response): Promise<void> {
  try {
    const { brandId } = req.params;
    const brand = await prisma.brand.findUnique({
      where: { id: brandId },
      include: {
        Creator: true,
        collection: true,
      },
    })   
     if (!brand) {
      res.status(230).json([]);
      return;
    }
    res.status(200).json(
     
      brand
    );
  } catch (error: any) {
    console.error('Error retrieving collection:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
  
}

export async function getAllBrands(req: Request, res: Response): Promise<void> {
  try {
   const brand = await prisma.brand.findMany({
    })   
     if (!brand) {
      res.status(404).json({
        success: false,
        message: 'brand not found',
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: 'brand retrieved successfully',
      data: brand,
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


export async function updateBrandName(req: Request, res: Response): Promise<void> {
  try {
    const { brandId } = req.params;
    const { newName } = req.body;

    if (!brandId || !newName) {
      res.status(400).json({ error: 'Missing required parameters.' });
      return;
    }
    const updatedBrand = await prisma.brand.update({
      where: { id: brandId },
      data: { fullName: newName },
    });
    console.log('Brand name updated:', updatedBrand);
    res.status(200).json(updatedBrand);
 
  } catch (error: any) {
    console.error('Error retrieving collection:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
}


export async function updateBrandemail(req: Request, res: Response): Promise<void> {
  try {
    const { brandId } = req.params;
    const { newEmail } = req.body;

    if (!brandId || !newEmail) {
      res.status(400).json({ error: 'Missing required parameters.' });
      return;
    }
    const updatedBrand = await prisma.brand.update({
      where: { id: brandId },
      data: { email: newEmail },
    });
    console.log('Brand email updated:', updatedBrand);
    res.status(200).json(updatedBrand);
 
  } catch (error: any) {
    console.error('Error retrieving collection:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
}


export async function updateBrandImage(req: Request, res: Response): Promise<void> {
  try {
    const { brandId } = req.params;
    const { newImage } = req.body;

    if (!brandId || !newImage) {
      res.status(400).json({ error: 'Missing required parameters.' });
      return;
    }
    const updatedBrand = await prisma.brand.update({
      where: { id: brandId },
      data: { image: newImage },
    });
    console.log('Brand image updated:', updatedBrand);
    res.status(200).json(updatedBrand);
 
  } catch (error: any) {
    console.error('Error retrieving collection:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
}


export async function updateBrandCover(req: Request, res: Response): Promise<void> {
  try {
    const { brandId } = req.params;
    const { newCover } = req.body;

    if (!brandId || !newCover) {
      res.status(400).json({ error: 'Missing required parameters.' });
      return;
    }
    const updatedBrand = await prisma.brand.update({
      where: { id: brandId },
      data: { cover: newCover },
    });
    console.log('Brand Cover updated:', updatedBrand);
    res.status(200).json(updatedBrand);
 
  } catch (error: any) {
    console.error('Error retrieving collection:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
}



export async function updateBrandBio(req: Request, res: Response): Promise<void> {
  try {
    const { brandId } = req.params;
    const { newBio } = req.body;

    if (!brandId || !newBio) {
      res.status(400).json({ error: 'Missing required parameters.' });
      return;
    }
    const updatedBrand = await prisma.brand.update({
      where: { id: brandId },
      data: { bio: newBio },
    });
    console.log('Brand Bio updated:', updatedBrand);
    res.status(200).json(updatedBrand);
 
  } catch (error: any) {
    console.error('Error retrieving collection:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
}


export async function deleteBrand(req: Request, res: Response): Promise<void> {
  try {
    const { brandId } = req.params;
    if (!brandId) {
      res.status(400).json({ error: 'Missing required parameters.' });
      return;
    }
    const deletedBrand = await prisma.brand.delete({
      where: { id: brandId },
    });

    console.log('Brand deleted:', deletedBrand);
    res.status(200).json(deletedBrand);
  } catch (error: any) {
    console.error('Error deleting brand:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
}