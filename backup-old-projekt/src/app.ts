import express, { Request, Response, NextFunction } from "express";
import { connect } from "mongoose";
import productRoutes from "./routes/product";
import orderRoutes from "./routes/order";
import { json } from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const MONGO_DB_URL = process.env["DB_URL_MONGO"] || "";

const app = express();

app.use(json());
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

const dbConnection = connect("mongodb://localhost:27017/mongo_database").then(
    () => {
        console.log("Succesfully connected");
        app.listen(3000);
    }
);
