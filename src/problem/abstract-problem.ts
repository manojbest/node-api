import {CustomError} from "ts-custom-error";

export abstract class AbstractProblem extends CustomError {

    private readonly statusCode: number = 500;
    private customErrorCode: string = "";
    private description: string = "";

    protected constructor(statusCode: number, customErrorCode: string, description: string) {
        super(description);
        this.statusCode = statusCode;
        this.customErrorCode = customErrorCode;
        this.description = description;
    }

    public getStatusCode(): number {
        return this.statusCode;
    }
}
