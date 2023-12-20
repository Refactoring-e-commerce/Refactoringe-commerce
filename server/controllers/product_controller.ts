import { Request, Response } from 'express';
import { PrismaClient,Product } from '@prisma/client';



const prisma = new PrismaClient();

export const getAllProduct = async (_req: Request, res: Response): Promise<void> => {
  try {
    const result = await prisma.product.findMany();

    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(230).json([]);
    }
  } catch (err: any) {
    
    res.status(400).json({ error: err.message });
  }
};



export const getOneProductByReference = async (req: Request, res: Response) => {
  const { reference } = req.params;

  try {
    const result = await prisma.product.findFirst({
      where: { reference },
    });

    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send({ error: 'Product not found' });
    }
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};


interface CreateProductRequest {
  name: string;
  image: string[];
  description: string;
  price: number;
  category: string;
  quantity: number;
  reference: string;
  status: boolean;
  collectionId: string;
}

export const createProduct = async (req: Request<{}, {}, CreateProductRequest>, res: Response) => {
  try {
    const { name, image, description, price, category, quantity, reference, status, collectionId } = req.body;
    const product = await prisma.product.create({
      data: {
        name,
        image,
        description,
        price,
        category,
        quantity,
        reference,
        status,
        collectionId,
      },
    });
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, image, description, price, category, quantity, reference, status, collectionId } = req.body;
    const updatedProduct = await prisma.product.update({
      where: {
        id,
      },
      data: {
        name,
        image,
        description,
        price,
        category,
        quantity,
        reference,
        status,
        collectionId,
      },
    });
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({
      where: {
        id,
      },
    });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
