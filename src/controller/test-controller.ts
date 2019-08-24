import {ApiOperationGet, ApiPath, SwaggerDefinitionConstant} from "swagger-express-ts";
import {RestController} from "../support/decorator/custom-decorator";
import {BaseHttpController, httpGet as HttpGet} from "inversify-express-utils";
import {inject as Inject} from "inversify";
import {TYPES} from "../constant/common-constant";
import {Request} from "express";
import {TestServiceImpl} from "../service/test-service-impl";

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