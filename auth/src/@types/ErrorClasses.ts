export class validationError extends Error {
    constructor(public reason: string) {
        super()
        this.reason = reason
    }
}
export class DatabaseError extends Error {
    constructor(public reason: string[]) {
        super()
        this.reason = reason
    }
}