import express from 'express';

import {getProductsByCategory, createProduct,updateProduct,getOneProductByReference, getAllProduct,deleteProduct,filterbyPrice} from "../controllers/product_controller";

const router = express.Router();

router.get('/product/:reference', getOneProductByReference);
router.get('/product', getAllProduct);
router.post('/create',createProduct );
router.put('/update/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/product/:minprice/:maxprice', filterbyPrice);
router.get('/:category', getProductsByCategory);



export default router