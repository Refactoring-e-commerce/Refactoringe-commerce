const walletController = require("../controllers/wallet_controller.ts")
const route = require("express").Router()


route.get('/:userId', walletController.getWalletById)
route.post("/addwallet", walletController.addProductForUser);
route.delete("/:userId/:prodId",walletController.DeleteProduct)
route.delete("/:userId",walletController.deleteAll)
export default route