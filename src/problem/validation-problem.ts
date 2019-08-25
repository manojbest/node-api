import {AbstractProblem} from "./abstract-problem";

export class ValidationProblem extends AbstractProblem {

    constructor(statusCode: number, customErrorCode: string, description: string) {
        super(statusCode, customErrorCode, description);
    }
}
