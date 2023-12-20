import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getOneCreator = async (req: Request, res: Response) => {
  try {
    const creator = await prisma.creator.findUnique({
      where: { id: req.params.id },
    });

    if (creator) {
      res.status(200).send(creator);
    } else {
      res.status(404).send({ error: 'Creator not found' });
    }
  } catch (error) {
    console.error('Error fetching creator:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}

export const getAllCreators = async (req: Request, res: Response) => {
  try {
    const creators = await prisma.creator.findMany();
    res.status(200).send(creators);
  } catch (error) {
    console.error('Error fetching creators:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

export const updateImageProfile = async (req: Request, res: Response) => {
  const { Image } = req.body;
  try {
    await prisma.creator.updateMany({
      where: {
        id: req.params.id,
      },
      data: {
        image: Image,
      },
    });
    res.status(200).send('Successful');
  } catch (error) {
    console.error('Error updating profile image:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

export const updateCover = async (req: Request, res: Response) => {
  const { Cover} = req.body;
  try {
    await prisma.creator.updateMany({
      where: {
        id: req.params.id,
      },
      data: {
        cover: Cover,
      },
    });
    res.status(200).send('Successful');
  } catch (error) {
    console.error('Error updating cover image:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}

export const updateBio = async (req: Request, res: Response): Promise<void> => {
  try {
    const { bio } = req.body;

    await prisma.creator.update({
      where: {
        id: req.params.id,
      },
      data: {
        bio,
      },
    });

    res.status(200).send('Successful');
  } catch (error) {
    console.error('Error updating bio:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}