import mongoose from "mongoose";
import { UserDocument } from "./user.model";

const randomId = () => {
    const number = Date.now() + "" + Math.floor(Math.random() * 10000000);
    return number;
};

export interface ProductDocument extends mongoose.Document {
    user: UserDocument["_id"];
    title: string;
    description: string;
    price: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}

const productSchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            required: true,
            unique: true,
            default: () => `product_${randomId()}`,
        },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
        image: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const ProductModel = mongoose.model<ProductDocument>("Session", productSchema);

export default ProductModel;
