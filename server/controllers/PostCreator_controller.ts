import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, image, creatorId } = req.body;

    const newPost = await prisma.postCreator.create({
      data: {
        title,
        image,
        creatorId,
      },
    });
    res.status(201).json(newPost);
  }  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updatePost = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, image, creatorId } = req.body;
    const postId = req.params.postId;

   
    const updatedPost = await prisma.postCreator.update({
      where: {
        id: postId,
      },
      data: {
        title,
        image,
        creatorId,
      },
    });

    res.status(200).json(updatedPost);
  }catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const deletePost = async (req: Request, res: Response): Promise<void> => {
  try {
    const postId = req.params.postId;

    const deletedPost = await prisma.postCreator.delete({
      where: {
        id: postId,
      },
    });
    res.status(200).json(deletedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const getOnePost = async (req: Request, res: Response): Promise<void> => {
  try {
    const postId = req.params.postId;

    const post = await prisma.postCreator.findUnique({
      where: {
        id: postId,
      },
    });

    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}