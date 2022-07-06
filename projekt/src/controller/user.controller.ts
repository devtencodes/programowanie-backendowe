import { request, Request, Response } from "express";
import logger from "../utils/logger";

export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = await createUserHandler(req.body);
    } catch (e) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
}
