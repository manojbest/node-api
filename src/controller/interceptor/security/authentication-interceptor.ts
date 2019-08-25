
import * as express from "express";
import {postConstruct} from "inversify";
import {isEmpty} from "lodash";
import {AuthenticationProblem} from "../../../problem/authentication-problem";
import {Interceptor} from "../../../support/decorator/custom-decorator";
import {Logger} from "../../../util/logger";
import {AbstractInterceptor} from "../abstract-interceptor";

@Interceptor()
export class AuthenticationInterceptor extends AbstractInterceptor {

    @postConstruct()
    public setupExcludeOptions() {
        this.configureExcludeOptions({
            path: [
                {url: "/favicon.ico", methods: ["GET"]},
                {url: "/health", methods: ["GET"]},
                {url: "/info", methods: ["GET"]},
            ],
        });
    }

    /**
     * The Authentication Interceptor will check the `Authorization` key on the header . If this header  is missing,
     * Authorization Problem will be thrown.
     *
     * @param req
     * @param res
     * @param next
     */
    public async handler(req: express.Request, res: express.Response, next: express.NextFunction) {
        // Get x-authorization header or empty string if its not available
        let authToken: string | string[] = "";
        if (!isEmpty(req.headers.authorization)) {
            authToken = req.headers.authorization;
        }

        try {
            // validate auth token
            next();
        } catch (e) {
            Logger.getLogger().error("Authentication Error", e);
            next(new AuthenticationProblem("TST_01", e.message));
        }
    }
}
