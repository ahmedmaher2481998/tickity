import { CustomError } from "./custom-error"

export class DatabaseError extends CustomError {
    reason = "Failed connecting to the database."
    statusCode = 500;
    constructor() {
        super("Database Error .")
        Object.setPrototypeOf(this, DatabaseError.prototype)
    }
    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return [{
            message: this.reason
        }]
    }
}