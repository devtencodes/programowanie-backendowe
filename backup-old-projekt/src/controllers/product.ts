import { Request, Response, NextFunction } from "express";
import Product from "../models/product";

export const postAddProduct = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { title } = req.body;
    const { price } = req.body;
    const { description } = req.body;
    const { imageUrl } = req.body;

    const product = new Product({
        title,
        price,
        description,
        imageUrl,
    });

    return product
        .save()
        .then((product) => res.status(201).json({ product }))
        .catch((error) => res.status(500).json({ error }));
};

export const getProducts = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    return Product.find()
        .then((product) => res.status(201).json({ product }))
        .catch((error) => res.status(500).json({ error }));
};
export const getProduct = (req: Request, res: Response, next: NextFunction) => {
    const productId = req.params.productId;
    return Product.findById(req.params.productId)
        .then((product) => res.status(201).json({ product }))
        .catch((error) => res.status(500).json({ error }));
};

export const postDeleteProduct = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const productId = req.params.productId;
    return Product.findByIdAndDelete(productId).then((product) =>
        product
            ? res.status(201).json({ message: "product deleted" })
            : res.status(404).json({ message: "product not found" })
    );
};
