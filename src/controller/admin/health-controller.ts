import {BaseHttpController, httpGet} from "inversify-express-utils";
import {RestController} from "../../support/decorator/custom-decorator";

@RestController("")
export class HealthController extends BaseHttpController {

    @httpGet("/health")
    public getSystemHealth(): object {
        return {
            version: "1.0.0",
            status: "UP",
        };
    }

    @httpGet("/info")
    public getSystemInfo(): object {
        return {
            name: "node-api",
            description: "node-api",
            version: "1.0.0",
        };
    }
}
