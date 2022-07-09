import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt.utils";
import { request } from "http";
import { reIssueAccessToken } from "../service/session.service";

const deserializeUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    //getting accessToken from headers
    const accessToken = get(req, "headers.authorization", "").replace(
        /^Bearer\s/,
        ""
    );
    // getting refreshToken from headers
    const refreshToken = get(req, "headers.x-refresh");

    if (!accessToken) {
        return next();
    }

    const { decoded, expired } = verifyJwt(accessToken);

    /* if there's accessToken then it's try to decode it
    if it's succeeded, then it's attached to res.locals.user */
    if (decoded) {
        res.locals.user = decoded;
        return next();
    }

    /* if token has expired and there is a refresh token
    then it checks if the refresh token is valid */
    if (expired && refreshToken) {
        const newAccessToken = await reIssueAccessToken({ refreshToken });

        // issues a new access token  on header of x access token
        if (newAccessToken) {
            res.setHeader("x-access-token", newAccessToken);
        }

        // decoding access token and attaching it to res.locals.user
        const result = verifyJwt(accessToken);

        res.locals.user = result.decoded;
        return next();
    }

    return next();
};

export default deserializeUser;
