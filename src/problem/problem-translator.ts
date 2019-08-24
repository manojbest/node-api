

import {Response} from "express";
import {CustomError} from "ts-custom-error";
import {ProblemHandler} from "../support/decorator/custom-decorator";
import {AbstractProblem} from "./abstract-problem";

@ProblemHandler()
export class ProblemTranslator {

    public process(error: Error, response: Response): void {

        let errorResponse = {};
        let statusCode = 500;
        if (!(error instanceof CustomError)) {
            errorResponse = {
                statusCode: 500,
                name: error.name,
                customErrorCode: "Application Logical Error",
                description: error.message,
            };
        } else {
            errorResponse = error;
            const customError: AbstractProblem = error as AbstractProblem;
            statusCode = customError.getStatusCode();
        }

        response.status(statusCode).send(errorResponse);
    }

}
