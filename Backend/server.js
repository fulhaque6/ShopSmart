import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // middle ware (Allows us to accept JSON data in the req.body)

app.use("/api/products",productRoute);

app.listen(PORT, () => {
  connectDB();
  console.log("Server Started at http://localhost:"+PORT);
});
