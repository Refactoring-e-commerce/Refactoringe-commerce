const favoriteController = require('../controllers/favorite_controller.ts')
const route = require("express").Router()


route.get('/:userId', favoriteController.getFavoritesById)
route.post("/add", favoriteController.addProductToFav);
route.delete('/delete',favoriteController.deleteFromFav)

export default route 