import {
    CreateProductInput,
    UpdateProductInput,
} from "./../schema/product.schema";
import { Request, Response, NextFunction } from "express";
import {
    createProduct,
    findAndUpdateProduct,
    findProduct,
    deleteProduct,
} from "../service/product.service";

/*  it refers to zod's schema object properties
no params, no response body and then just body is needed */
export async function createProductHandler(
    req: Request<{}, {}, CreateProductInput["body"]>,
    res: Response
) {
    const userId = res.locals.user._id;
    const body = req.body;
    const product = await createProduct({ ...body, user: userId });

    return res.send(product);
}

export async function updateProductHandler(
    req: Request<UpdateProductInput["params"]>,
    res: Response
) {
    const userId = res.locals.user._id;

    const productId = req.params.productId;
    const update = req.body;
    const product = await findProduct({ productId });

    if (!product) {
        return res.sendStatus(404);
    }

    if (product.user !== userId) {
        return res.sendStatus(403);
    }

    const updatedProduct = await findAndUpdateProduct({ productId }, update, {
        new: true,
    });

    return res.send(updatedProduct);
}

export async function getProductHandler(
    req: Request<UpdateProductInput["params"]>,
    res: Response
) {
    const productId = req.params.productId;
    const product = await findProduct({ productId });

    if (!product) {
        return res.sendStatus(404);
    }

    return res.send(product);
}

export async function deleteProductHandler(
    req: Request<UpdateProductInput["params"]>,
    res: Response
) {
    const userId = res.locals.user._id;

    const productId = req.params.productId;

    const product = await findProduct({ productId });

    if (!product) {
        return res.sendStatus(404);
    }

    if (product.user !== userId) {
        return res.sendStatus(403);
    }

    await deleteProduct({ productId });

    return res.sendStatus(200);
}
