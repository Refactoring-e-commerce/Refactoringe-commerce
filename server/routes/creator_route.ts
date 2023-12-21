import express from 'express';

import { updateImageProfile,updateCover,getAllCreators,getOneCreator,updateBio } from '../controllers/creator_controller';


const router = express.Router();

router.get('/creator/:id', getOneCreator);
router.get('/creators', getAllCreators);
router.put('/updateImage/:id', updateImageProfile);
router.put('/updateCover/:id', updateCover);
router.put('/updateBio/:id', updateBio);



export default router;