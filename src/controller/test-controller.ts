import {Request} from "express";
import {inject as Inject} from "inversify";
import {BaseHttpController, httpGet as HttpGet} from "inversify-express-utils";
import {ApiOperationGet, ApiPath, SwaggerDefinitionConstant} from "swagger-express-ts";
import {TYPES} from "../constant/common-constant";
import {TestServiceImpl} from "../service/test-service-impl";
import {RestController} from "../support/decorator/custom-decorator";

@ApiPath({
    path: "/test",
    name: "TestController",
    security: {},
})
@RestController("")
export class TestController extends BaseHttpController {

    constructor(@Inject(TYPES.TestService) private testService: TestServiceImpl) {
        super();
    }

    @ApiOperationGet({
        description: "TestController getTestContents Endpoint",
        summary: "The TestController`s test endpoint",
        responses: {
            200: {description: "Success", type: SwaggerDefinitionConstant.Response.Type.OBJECT},
        },
    })
    @HttpGet("/test")
    public handleTestRoute(request: Request) {
        return this.testService.getTestMethod();
    }
}
