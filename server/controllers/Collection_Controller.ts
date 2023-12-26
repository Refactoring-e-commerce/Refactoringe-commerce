import { PrismaClient } from '@prisma/client';
import { Request, Response, response } from 'express';

const prisma = new PrismaClient();

export async function addCollection(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, creatorId } = req.body;
    const { brandId } = req.params;
    const creator = await prisma.creator.findUnique({
      where: { id: creatorId },
    });

    if (!creator) {
      res.status(404).json({
        success: false,
        message: " Creator not found",
      });
      return;
    }
    const savedCollection = await prisma.collection.create({
      data: {
        name: name,
        Brand: { connect: { id: brandId } },
        Creator: { connect: { id: creatorId } },
      },
    });

    res.status(201).json({
      success: true,
      message: "Collection added successfully",
      data: savedCollection,
    });
  } catch (error: any) {
    console.error("Error adding collection:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}

export async function getCollection(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { collectionId } = req.params;
    const collection = await prisma.collection.findUnique({
      where: { id: collectionId },
      include: {
        Creator: true,
        Brand: true,
        product: true,
      },
    });
    if (!collection) {
      res.status(404).json({
        success: false,
        message: "Collection not found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Collection retrieved successfully",
      data: collection,
    });
  } catch (error: any) {
    console.error("Error retrieving collection:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}

export async function getCollections(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const collections = await prisma.collection.findMany({
      include: {
        Creator: true,
        Brand: true,
        product: true,
      },
    });
    
    res.status(200).json({
      success: true,
      message: "Collections retrieved successfully",
      data: collections,
    });
  } catch (error: any) {
    console.error("Error retrieving collections:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  } finally {
    await prisma.$disconnect(); 
  }
}

// the change
export async function getCollectionsByBrand(req: Request, res: Response): Promise<void> {
  try {
    const { brandId } = req.params;
    const collections = await prisma.collection.findMany({
      where: {
        brandId: brandId,
      },
      include: {
        Creator: true,
        Brand: true,
        product: true,
      },
    });
    res.status(200).json(collections);
  } catch (error: any) {
    console.error("Error retrieving collections:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}

export async function getCollectionsByCreator(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { creatorId } = req.params;
    const collections = await prisma.collection.findMany({
      where: {
        creatorId: creatorId,
      },
      include: {
        Creator: true,
        Brand: true,
        product: true,
      },
    });

    res.status(200).json({
      success: true,
      message: "Collections retrieved successfully",
      data: collections,
    });
  } catch (error: any) {
    console.error("Error retrieving collections:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}

export async function updateCollectionCreator(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { collectionId } = req.params;
    const { creatorId } = req.body;

    const existingCollection = await prisma.collection.findUnique({
      where: { id: collectionId },
    });
    if (!existingCollection) {
      res.status(404).json({
        success: false,
        message: "Collection not found",
      });
      return;
    }
    const newCreator = await prisma.creator.findUnique({
      where: { id: creatorId },
    });

    if (!newCreator) {
      res.status(404).json({
        success: false,
        message: "New creator not found",
      });
      return;
    }
    const updatedCollection = await prisma.collection.update({
      where: { id: collectionId },
      data: {
        Creator: { connect: { id: creatorId } },
      },
    });
    res.status(200).json({
      success: true,
      message: "Collection updated successfully",
      data: updatedCollection,
    });
  } catch (error: any) {
    console.error("Error updating collection creator:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}

export async function updateCollectionName(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { collectionId } = req.params;
    const { name } = req.body;

    const existingCollection = await prisma.collection.findUnique({
      where: { id: collectionId },
    });

    if (!existingCollection) {
      res.status(404).json({
        success: false,
        message: "Collection not found",
      });
      return;
    }

    const updatedCollection = await prisma.collection.update({
      where: { id: collectionId },
      data: {
        name: name,
      },
    });

    res.status(200).json({
      success: true,
      message: "Collection updated successfully",
      data: updatedCollection,
    });
  } catch (error: any) {
    console.error("Error updating collection name:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}

export async function deleteOneCollection(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { collectionId } = req.params;
    const existingCollection = await prisma.collection.findUnique({
      where: { id: collectionId },
    });

    if (!existingCollection) {
      res.status(404).json({
        success: false,
        message: "Collection not found",
      });
      return;
    }
    await prisma.collection.delete({
      where: { id: collectionId },
    });
    res.status(200).json({
      success: true,
      message: "Collection deleted successfully",
    });
  } catch (error: any) {
    console.error("Error deleting collection:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}
