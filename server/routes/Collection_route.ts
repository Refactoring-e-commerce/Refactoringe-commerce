const CollectionController = require("../controllers/Collection_Controller.ts");
const route = require("express").Router();



route.post('/addcollection/:brandId',CollectionController.addCollection)
route.get('/collections/:collectionId',CollectionController.getCollection)
route.get('/collections',CollectionController.getCollections)
route.get('/by-brand/:brandId', CollectionController.getCollectionsByBrand);
route.get('/by-creator/:creatorId', CollectionController.getCollectionsByCreator)
route.put('/updateCreator/:collectionId', CollectionController.updateCollectionCreator);
route.put('/updatename/:collectionId', CollectionController.updateCollectionName);
route.delete('/delatecollections/:collectionId',CollectionController.deleteOneCollection)
export default route