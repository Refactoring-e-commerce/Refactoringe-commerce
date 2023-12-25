const walletController = require("../controllers/wallet_controller.ts")
const route = require("express").Router()


route.get('/:userId', walletController.getWalletById)
route.post("/addwallet/:userId/:prodId", walletController.addProductForUser);
route.delete("delete/:userId/:prodId",walletController.DeleteProduct)
route.delete("/:userId",walletController.deleteAll)
export default route