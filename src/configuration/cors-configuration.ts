
import * as cors from "cors";
import {Application} from "express";
import {Configuration} from "../support/decorator/custom-decorator";
import {BaseConfiguration} from "./base-configuration";

@Configuration()
export class CorsConfiguration implements BaseConfiguration {
    public apply(app: Application) {
        // allow options pre-flight request with CORS
        app.options("*", cors());
        app.use(cors());
    }
}
