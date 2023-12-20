import express from "express";
import cors from "cors";
import walletRout from './routes/wallet_route'
import favoriteRout from './routes/favorite_route'

const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());
app.use("/wallet",walletRout)
app.use("/favorite",favoriteRout)

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
