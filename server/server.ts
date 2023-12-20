import express from "express";
import cors from "cors";
import collectionRoute from './routes/Collection_route';
import BrandRoute from './routes/Brand_route';

const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());



app.use('/collection',collectionRoute)
app.use('/brand',BrandRoute)

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
