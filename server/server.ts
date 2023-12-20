import express from "express";
import cors from "cors";
import CreatorRoute from "./routes/creator_route"
import ProductRoute from "./routes/product_route"

const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());



app.use("/Creator",CreatorRoute)
app.use("/Product", ProductRoute)

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
