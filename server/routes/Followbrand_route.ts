const fllowbrandController = require("../controllers/FollowBrand_controller.ts");
const route = require("express").Router();



route.post('/addfollow/:userId/:brandId',fllowbrandController.addFollow)
route.get('/followerbrand/:brandId',fllowbrandController.getAllBrandfllower )
route.get('/followeuser/:userId',fllowbrandController.getAlluserfollowed )
route.delete('/delete/:Id',fllowbrandController.removeFollow  )







export default route