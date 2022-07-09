import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import {
    createUserSessionHandler,
    deleteSessionHandler,
    getUserSessionsHandler,
} from "./controller/session.controller";
import { createProductHandler } from "./controller/product.controller";
import validateResource from "./middleware/validateResource";
import requireUser from "./middleware/requireUser";
import { createUserSchema } from "./schema/user.schema";
import { createSessionSchema } from "./schema/session.schema";
import { createProductSchema } from "./schema/product.schema";

function routes(app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) =>
        res.sendStatus(200)
    );

    app.post(
        "/api/users",
        validateResource(createUserSchema),
        createUserHandler
    );

    app.post(
        "/api/sessions",
        validateResource(createSessionSchema),
        createUserSessionHandler
    );

    app.get("/api/sessions", requireUser, getUserSessionsHandler);
    app.delete("/api/sessions", requireUser, deleteSessionHandler);

    app.post(
        "/api/products",
        [requireUser, validateResource(createProductSchema)],
        createProductHandler
    );
}
export default routes;
