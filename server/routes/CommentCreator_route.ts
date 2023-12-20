import express from 'express';
import {
  createComment,
  updateComment,
  deleteComment,
} from "../controllers/CommentCreator_controller"

const commentRouter = express.Router();


commentRouter.post('/', createComment);


commentRouter.put('/:commentId', updateComment);


commentRouter.delete('/:commentId', deleteComment);

export default commentRouter;