import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { RequestValidationError, DatabaseError } from '../errors'
export function signinController(req: Request, res: Response, next: NextFunction) {
    const validationErrors = validationResult(req)

    if (!validationErrors.isEmpty()) {
        next(new RequestValidationError(validationErrors.array()))
    } else {
        next(new DatabaseError())
    }


    res.end('signin user ')

}