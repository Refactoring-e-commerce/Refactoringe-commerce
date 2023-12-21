import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();


export const createcommentBrand = async (req: Request, res: Response): Promise<void> => {
  try {
    const { body, userId , postBrandId} = req.body;

    const newPost = await prisma.brandComment.create({
      data: {
        body,
        userId,
        postBrandId,
      },
    });
    res.status(201).json(newPost);
  }  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const getOnecomment = async (req: Request, res: Response): Promise<void> => {
  try {
    const {commentId} = req.params;

    const post = await prisma.brandComment.findUnique({
      where: {
        id: commentId,
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


export const getAllCommentPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const {postId} = req.params;
    const post = await prisma.brandComment.findMany({
      where: {
        postBrandId: postId,
      },
    })

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

export const getAllCommentUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {userId} = req.params;
    const post = await prisma.brandComment.findMany({
      where: {
        userId: userId,
      },
    })

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

export const updateCommentBand= async (req: Request, res: Response): Promise<void> => {
  try {
    const { body} = req.body;
    const {userId, commentId} = req.params;
   

   
    const updatedPost = await prisma.brandComment.update({
      where: {
        userId: userId,
        id: commentId,
      },
      data: {
        body,
      },
    });

    res.status(200).json(updatedPost);
  }catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



export const deleteCommentpostBrand = async (req: Request, res: Response): Promise<void> => {
  try {
    const {commentId} = req.params;
    const deletedPost = await prisma.brandComment.delete({
      where: {
        id: commentId,
      },
    });

    res.status(200).json("delated");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}