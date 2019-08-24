
import * as Config from "config";
import "reflect-metadata";
import "./aop/logging/logging-aspect";

import * as Cluster from "cluster";


import {NodeApplication} from "./support/decorator/custom-decorator";
import {Logger} from "./util/logger";


@NodeApplication
export class NodeApi {

    public run() {
        Logger.getLogger().info(`Server Started at ${Config.get("server.port")}`);
    }
}

/**
 * Catch Server Shutdown event
 */
process.on("SIGINT", async () => {
    Logger.getLogger().info("Shutting down ...");
    // shutdown workers
    Cluster.emit("kill");
    // on success
    process.exit(0);
});
