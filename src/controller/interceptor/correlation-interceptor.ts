
import * as Correlations from "correlation-id";
import * as express from "express";
import {postConstruct} from "inversify";
import {Interceptor} from "../../support/decorator/custom-decorator";
import {AbstractInterceptor} from "./abstract-interceptor";

@Interceptor()
export class CorrelationInterceptor extends AbstractInterceptor {

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

    public async handler(req: express.Request, res: express.Response, next: express.NextFunction) {
        Correlations.withId(() => {
            next();
        });
    }
}
