import express from "express";
import cors from "cors";
import collectionRoute from './routes/Collection_route';
import BrandRoute from './routes/Brand_route';

import walletRout from './routes/wallet_route'
import favoriteRout from './routes/favorite_route'

import CreatorRoute from "./routes/creator_route"
import ProductRoute from "./routes/product_route"
import PostCreator from "./routes/post_creator-route"
import CommentCreator from "./routes/CommentCreator_route"

const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());
app.use("/wallet",walletRout)
app.use("/favorite",favoriteRout)



app.use("/Creator",CreatorRoute)
app.use("/Product",ProductRoute)
app.use("/PostCreator", PostCreator)
app.use("/CommentCreator",CommentCreator)



app.use('/collection',collectionRoute)
app.use('/brand',BrandRoute)

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
