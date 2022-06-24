"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const product_1 = __importDefault(require("./routes/product"));
const body_parser_1 = require("body-parser");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const MONGO_DB_URL = process.env["DB_URL_MONGO"];
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use("/products", product_1.default);
const dbConnection = (0, mongoose_1.connect)("mongodb://localhost:27017/mongo_database").then(() => {
    console.log("Succesfully connected");
    app.listen(3000);
});
