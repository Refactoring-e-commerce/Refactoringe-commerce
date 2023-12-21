const postController = require("../controllers/PostBrand_controller.ts");
const route = require("express").Router();



route.post('/addpost',postController.createPostBrand)
route.get('/getonepost/:postId',postController.getOnePostbrand )
route.get('/getall/:brandId',postController.getallPostbrand )
route.put('/update/:postId',postController.updatePostbrand )
route.delete('/delete/:postId',postController.deletePostbrand )







export default route