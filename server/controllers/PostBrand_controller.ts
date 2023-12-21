import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();


export const createPostBrand = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, image , date, brandId } = req.body;

    const newPost = await prisma.postBrand.create({
      data: {
        title,
        image,
        date,
        brandId,
      },
    });
    res.status(201).json(newPost);
  }  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const getOnePostbrand = async (req: Request, res: Response): Promise<void> => {
  try {
    const {postId} = req.params;

    const post = await prisma.postBrand.findUnique({
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


export const getallPostbrand = async (req: Request, res: Response): Promise<void> => {
  try {
    const {brandId} = req.params;
    const post = await prisma.postBrand.findMany({
      where: {
        brandId: brandId,
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

export const updatePostbrand = async (req: Request, res: Response): Promise<void> => {
  try {
    const {  title, image , brandId } = req.body;
    const postId = req.params.postId;

   
    const updatedPost = await prisma.postBrand.update({
      where: {
        id: postId,
      },
      data: {
        title,
        image,
        brandId,
      },
    });

    res.status(200).json(updatedPost);
  }catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



export const deletePostbrand = async (req: Request, res: Response): Promise<void> => {
  try {
    const postId = req.params.postId;

    const deletedPost = await prisma.postBrand.delete({
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