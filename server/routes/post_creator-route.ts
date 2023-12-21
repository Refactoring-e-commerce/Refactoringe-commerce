import express from 'express';
import { createPost,updatePost,deletePost, getOnePost} from "../controllers/postcreator_controller";


const router = express.Router();

router.post('/', createPost);


router.put('/:postId', updatePost);


router.delete('/:postId', deletePost);


router.get('/:postId', getOnePost);


export default router