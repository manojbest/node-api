

import * as express from "express";
import {Application} from "express";
import * as swagger from "swagger-express-ts";
import {SwaggerDefinitionConstant} from "swagger-express-ts";
import {Configuration} from "../support/decorator/custom-decorator";
import {BaseConfiguration} from "./base-configuration";

@Configuration()
export class SwaggerConfiguration implements BaseConfiguration {
    public apply(app: Application) {
        app.use("/api-docs/swagger", express.static("swagger"));
        app.use("/api-docs/swagger/assets", express.static("node_modules/swagger-ui-dist"));
        app.use(swagger.express({
            definition: {
                info: {
                    title: "socket-composite",
                    version: "1.0.0",
                },
                securityDefinitions: {
                    apiKeyHeader: {
                        type: SwaggerDefinitionConstant.Security.Type.API_KEY,
                        in: SwaggerDefinitionConstant.Security.In.HEADER,
                        name: "x-authorization",
                    },
                },
            },
        }));
    }
}
