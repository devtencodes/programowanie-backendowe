import { RequestHandler } from "express";
import { Product } from "../models/product";

const PRODUCTS: Product[] = [
    {
        id: "1",
        text: "Temp product",
    },
];

export const getProducts: RequestHandler = (req, res, next) => {
    res.json({ product: PRODUCTS });
};
