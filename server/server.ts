import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import collectionRoute from "./routes/Collection_route";
import BrandRoute from "./routes/Brand_route";

import walletRout from "./routes/wallet_route";
import favoriteRout from "./routes/favorite_route";

import CreatorRoute from "./routes/creator_route";
import ProductRoute from "./routes/product_route";
import PostCreator from "./routes/post_creator-route";
import CommentCreator from "./routes/CommentCreator_route";
import PostBrand from "./routes/post_Brand_route";
import CommentBrand from "./routes/CommentBrand_route";
import FlowBrand from "./routes/Followbrand_route";
import userRouter from "./routes/user_route";

const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/users", userRouter);

app.use("/wallet", walletRout);
app.use("/favorite", favoriteRout);

app.use("/Creator", CreatorRoute);
app.use("/Product", ProductRoute);
app.use("/PostCreator", PostCreator);
app.use("/CommentCreator", CommentCreator);

app.use("/collection", collectionRoute);
app.use("/brand", BrandRoute);

app.use("/PostBrand", PostBrand);
app.use("/CommentBrand", CommentBrand);

app.use("/follow", FlowBrand);

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
