import {AbstractProblem} from "./abstract-problem";

export class HttpProblem extends AbstractProblem {

    constructor(statusCode: number, customErrorCode: string, description: string) {
        super(statusCode, customErrorCode, description);
    }
}
