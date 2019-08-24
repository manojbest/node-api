
import {afterMethod, beforeMethod, Metadata, onThrowOfMethod} from "aspect.js";

import * as CircularJSON from "circular-json";
import * as executionTime from "execution-time";
import {Logger} from "../../util/logger";
import APPLICATION_POINTCUT from "./logging-pointcut";

class LoggingAspect {

    @beforeMethod(APPLICATION_POINTCUT)
    public logBeforeMethod(metadata: Metadata): void {
        executionTime().start(metadata.method.name);
        Logger.getLogger().info(`Enter ${metadata.className}.${metadata.method.name} argument[s] = `+
            `${CircularJSON.stringify(metadata.method.args)}`);
    }

    @afterMethod(APPLICATION_POINTCUT)
    public logAfterMethod(metadata: Metadata): void {
        const result = executionTime().stop(metadata.method.name);
        Logger.getLogger().info(`Exit ${metadata.className}.${metadata.method.name} with result = `+
            `${CircularJSON.stringify(metadata.method.result)}  execution time = ${result.time}`);
    }

    @onThrowOfMethod(APPLICATION_POINTCUT)
    public logAfterThrowing(metadata: Metadata): void {
        Logger.getLogger().info(`Exception in ${metadata.method.name} with cause = ${metadata.method.exception}`);
        // need to execute next() function in express otherwise request is getting blocked
        metadata.method.invoke(metadata.method.args[2]);
    }
}
