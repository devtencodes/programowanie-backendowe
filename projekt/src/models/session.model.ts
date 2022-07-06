import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { UserDocument } from "./user.model";

export interface SchemaDocument extends mongoose.Document {
    user: UserDocument["_id"];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}

const sessionSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        valid: { type: Boolean, default: true },
        userAgent: { type: String }, // storing the users browser which created that session
    },
    {
        timestamps: true,
    }
);

const SessionModel = mongoose.model("User", sessionSchema);

export default SessionModel;
