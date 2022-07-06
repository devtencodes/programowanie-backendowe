import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    title: string;
    price: number;
    description: string;
    imageUrl: string;
    userId: mongoose.Schema.Types.ObjectId;
}

const userSchema = new mongoose.Schema<IUser>({
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

export default mongoose.model("User", userSchema);
