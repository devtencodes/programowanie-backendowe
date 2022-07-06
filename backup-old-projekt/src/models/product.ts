import mongoose from "mongoose";

export interface IProduct extends mongoose.Document {
    title: string;
    price: number;
    description: string;
    imageUrl: string;
    userId: mongoose.Schema.Types.ObjectId;
}

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

const Product = mongoose.model<IProduct>("Product", productSchema);
export default Product;
