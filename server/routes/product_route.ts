import express from 'express';

import {createProduct,updateProduct,getOneProductByReference, getAllProduct,deleteProduct} from "../controllers/product_controller";

const router = express.Router();

router.get('/product/:reference', getOneProductByReference);
router.get('/product', getAllProduct);
router.post('/create',createProduct );
router.put('/update/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router