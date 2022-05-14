import express, { Request, Response, NextFunction } from "express";
import productRoutes from "./routes/product";
import { json } from "body-parser";

const app = express();

app.use(json());
app.use("/products", productRoutes);

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
