"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrder = exports.getOrders = void 0;
const product_1 = __importDefault(require("../models/product"));
const getOrders = (req, res, next) => {
    return product_1.default.find()
        .then((order) => res.status(201).json({ order }))
        .catch((error) => res.status(500).json({ error }));
};
exports.getOrders = getOrders;
const getOrder = (req, res, next) => {
    const orderId = req.params.productId;
    return product_1.default.findById(req.params.productId)
        .then((order) => res.status(201).json({ order }))
        .catch((error) => res.status(500).json({ error }));
};
exports.getOrder = getOrder;
