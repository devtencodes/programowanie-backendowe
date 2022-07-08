import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt.utils";
import { request } from "http";

const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
    const accessToken = get(req, "headers.authorization", "").replace(
        "/^Bearers/",
        ""
    );

    if (!accessToken) {
        return next();
    }

    const { decoded, expired } = verifyJwt(accessToken);
    console.log("decoded", decoded);

    if (decoded) {
        res.locals.user = decoded;
        return next();
    }

    return next();
};

export default deserializeUser;
