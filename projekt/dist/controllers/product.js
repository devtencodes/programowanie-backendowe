"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postDeleteProduct = exports.getProduct = exports.getProducts = exports.postAddProduct = void 0;
const product_1 = __importDefault(require("../models/product"));
const postAddProduct = (req, res, next) => {
    const { title } = req.body;
    const { price } = req.body;
    const { description } = req.body;
    const { imageUrl } = req.body;
    const product = new product_1.default({
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
exports.postAddProduct = postAddProduct;
const getProducts = (req, res, next) => {
    return product_1.default.find()
        .then((product) => res.status(201).json({ product }))
        .catch((error) => res.status(500).json({ error }));
};
exports.getProducts = getProducts;
const getProduct = (req, res, next) => {
    const productId = req.params.productId;
    return product_1.default.findById(req.params.productId)
        .then((product) => res.status(201).json({ product }))
        .catch((error) => res.status(500).json({ error }));
};
exports.getProduct = getProduct;
const postDeleteProduct = (req, res, next) => {
    const productId = req.params.productId;
    return product_1.default.findByIdAndDelete(productId).then((product) => product
        ? res.status(201).json({ message: "product deleted" })
        : res.status(404).json({ message: "product not found" }));
};
exports.postDeleteProduct = postDeleteProduct;
