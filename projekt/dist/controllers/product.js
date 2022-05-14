"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const PRODUCTS = [
    {
        id: "1",
        text: "Temp product",
    },
];
const getProducts = (req, res, next) => {
    res.json({ product: PRODUCTS });
};
exports.getProducts = getProducts;
