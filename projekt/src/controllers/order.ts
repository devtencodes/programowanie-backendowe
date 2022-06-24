import { Request, Response, NextFunction } from "express";
import Order from "../models/product";

export const getOrders = (req: Request, res: Response, next: NextFunction) => {
    return Order.find()
        .then((order) => res.status(201).json({ order }))
        .catch((error) => res.status(500).json({ error }));
};
export const getOrder = (req: Request, res: Response, next: NextFunction) => {
    const orderId = req.params.orderId;
    return Order.findById(orderId)
        .then((order) => res.status(201).json({ order }))
        .catch((error) => res.status(500).json({ error }));
};
