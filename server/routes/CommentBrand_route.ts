const CommentBrand = require("../controllers/CommentBrand_controller");
const route = require("express").Router();



route.post('/addcomment',CommentBrand.createcommentBrand)
route.get('/getonecomment/:commentId',CommentBrand.getOnecomment )
route.get('/getallbypost/:postId',CommentBrand.getAllCommentPost  )
route.get('/getallbyuser/:userId',CommentBrand.getAllCommentUser  )
route.put('/update/:commentId/:userId',CommentBrand.updateCommentBand )
route.delete('/delete/:commentId',CommentBrand.deleteCommentpostBrand )







export default route