import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createComment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { body, userId } = req.body;

    const newComment = await prisma.creatorComment.create({
      data: {
        body,
        userId,
      },
    });
    res.status(201).json(newComment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}

export const updateComment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { body, userId } = req.body;
    const commentId = req.params.commentId;

    const updatedComment = await prisma.creatorComment.update({
      where: {
        id: commentId,
      },
      data: {
        body,
        userId,
      },
    });

    res.status(200).json(updatedComment);
  }  catch (error) {
    console.error('Error updating comment:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}

export const deleteComment = async (req: Request, res: Response): Promise<void> => {
  try {
    const commentId = req.params.commentId;

    const deletedComment = await prisma.creatorComment.delete({
      where: {
        id: commentId,
      },
    });

    res.status(200).json(deletedComment);
  } catch (error) {
    console.error('Error delete comment:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}