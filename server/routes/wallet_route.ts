const walletController = require("../controllers/wallet_controller.ts")
const route = require("express").Router()


route.get('/:userId', walletController.getWalletById)
route.post("/addwallet/:userId/:productId", walletController.addProductForUser);
route.delete("/delete/:userId/:prodId",walletController.DeleteProduct)
route.delete("/:userId",walletController.deleteAll)
// route.put("/inc/:userId/prodId",walletController.incrIntquantity)
// route.put("/dec/:userId/:prodId")
export default route