
const BrandController = require("../controllers/Brand_Controller.ts");
const route = require("express").Router();



route.post('/addbrand',BrandController.createBrand)
route.get('/getone/:brandId',BrandController.getOneBrand)
route.get('/getall',BrandController.getAllBrands)
route.put('/updatename/:brandId',BrandController.updateBrandName)
route.put('/updatemaile/:brandId',BrandController.updateBrandemail)
route.put('/updateimage/:brandId',BrandController.updateBrandImage)
route.put('/updatecover/:brandId',BrandController.updateBrandCover)
route.put('/updateBio/:brandId',BrandController.updateBrandBio)
route.delete('/delete/:brandId',BrandController. deleteBrand)




export default route