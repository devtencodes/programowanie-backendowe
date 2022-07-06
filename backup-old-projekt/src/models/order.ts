import mongoose from "mongoose";

export interface IOrder extends mongoose.Document {
    products: [
        {
            product: object;
            quantity: number;
        }
    ];
    user: {
        name: string;
        userId: mongoose.Schema.Types.ObjectId;
    };
}

const orderSchema = new mongoose.Schema({
    products: [
        {
            product: { type: Object, required: true },
            quantity: { type: Number, required: true },
        },
    ],
    user: {
        name: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
});

const Order = mongoose.model<IOrder>("Order", orderSchema);
export default Order;
