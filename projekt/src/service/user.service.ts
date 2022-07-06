import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";

export async function createUser(
    // createdAt and updatedAt are being omitted because it's going to be generated by mongoose
    // when we create and update documents
    input: DocumentDefinition<
        Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
    >
) {
    try {
        return await UserModel.create(input);
    } catch (e: any) {
        throw new Error(e);
    }
}
