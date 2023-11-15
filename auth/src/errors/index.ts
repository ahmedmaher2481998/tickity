import { ValidationError } from 'express-validator'
export class RequestValidationError extends Error {

    constructor(public errors: ValidationError[]) {
        super()
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }
}
export class DatabaseError extends Error {
    reason = "Failed connecting to the database."
    constructor() {
        super()
        Object.setPrototypeOf(this, DatabaseError.prototype)
    }
}