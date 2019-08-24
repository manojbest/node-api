
import * as BodyParser from "body-parser";
import * as Compression from "compression";
import {Application} from "express";
import * as morgan from "morgan";
import {Configuration} from "../support/decorator/custom-decorator";
import {Logger} from "../util/logger";
import {BaseConfiguration} from "./base-configuration";

@Configuration()
export class ApplicationConfiguration implements BaseConfiguration {
    public apply(app: Application) {
        // express configurations
        app.use(BodyParser.urlencoded({
            extended: true,
        }));
        app.use(BodyParser.json());
        // compression configs
        app.use(Compression({
            filter: (req, res) => {
                if (req.headers["x-no-compression"]) {
                    // don't compress responses with this request header
                    return false;
                }
                // fallback to standard filter function
                return Compression.filter(req, res);
            },
        }));
        // morgan logger for http requests added to log file
        app.use(morgan("tiny", {
            stream: {
                write: (meta: any) => {
                    Logger.getLogger().info(meta);
                },
            },
        }));
    }
}
