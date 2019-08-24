

import * as Bunyan from "bunyan";
import * as Config from "config";

export class Logger {

    public static getLogger() {

        if (!this.bunyanLogger) {
            const appName: any = Config.get("info.app.name");
            const logLevel: any = Config.get("logger.level");
            const logDir: any = Config.get("logger.path");

            const logStreams = [];

            logStreams.push({
                level: logLevel,
                stream: process.stderr,
            });
            // logDir + 'socket-composite' + '.log'
            logStreams.push({
                count: 3,
                level: logLevel,
                path: `${logDir}${appName}.log`,
                period: "1d",
                type: "rotating-file",
            });

            this.bunyanLogger = Bunyan.createLogger({
                level: logLevel,
                name: appName,
                streams: logStreams,
            });
        }

        return this.bunyanLogger;
    }

    private static bunyanLogger = null;
}
