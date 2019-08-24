

import {AbstractProblem} from "./abstract-problem";

export class AuthenticationProblem extends AbstractProblem {

    constructor(customErrorCode: string, description: string) {
        super(401, customErrorCode, description);
    }
}
