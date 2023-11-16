import { ValidationError } from 'express-validator'
import { CustomError } from './custom-error'
export class RequestValidationError extends CustomError {
    statusCode = 400;

    constructor(public errors: ValidationError[]) {
        super("Bad Request ,Invalid Params")
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }
    serializeErrors() {
        const errorsArray = this.errors.map(r => {

            if (r.type === "field") {

                return {
                    message: r.msg,
                    field: r.path
                }
            } else {
                return {
                    message: r.msg
                }
            }
        })
        return errorsArray
    }


}